#!/bin/bash
set -x
awslocal s3 mb s3://${REGISTRY_BUCKET_NAME}
set +x
