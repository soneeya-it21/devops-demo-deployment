terraform {
  required_version = ">= 1.3.0"
  required_providers {
    aws = { source = "hashicorp/aws" }
  }
}


#provider "aws" {
#  region = var.aws_region
#}


data "aws_caller_identity" "current" {}