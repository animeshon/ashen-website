resource "google_cloud_run_service" "source" {
  project  = local.project_id
  location = "us-central1"
  name     = "source-animeshon-com"

  template {
    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "5"
        "run.googleapis.com/client-name"   = "cloud-console"
      }
    }

    spec {
      container_concurrency = 80
      service_account_name  = local.sa_compute_email

      containers {
        image = format("gcr.io/gcp-animeshon-general/ashen-frontend:%s", var.image_tag)

        env {
          name  = "HOST"
          value = "source.animeshon.com"
        }

        resources {
          limits = {
            cpu    = "1000m"
            memory = "256Mi"
          }
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  autogenerate_revision_name = true
}

# Configure the domain name mapping for the instance to source.animeshon.com.
resource "google_cloud_run_domain_mapping" "source" {
  project  = google_cloud_run_service.source.project
  location = google_cloud_run_service.source.location
  name     = "source.animeshon.com"

  metadata {
    namespace = local.project_id
  }

  spec {
    route_name = google_cloud_run_service.source.name
  }
}

# Allow everyone to access this instance from source.animeshon.com.
data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "source" {
  project  = google_cloud_run_service.source.project
  location = google_cloud_run_service.source.location
  service  = google_cloud_run_service.source.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
