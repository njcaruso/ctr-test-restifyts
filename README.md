# Background
Simple restify app running in docker running ts-node

# Docker Commands
docker build -t njcaruso/ctr-test-restifyts:1.0.0 .
docker push njcaruso/ctr-test-restifyts:1.0.0
docker run -d -p 80:3000 njcaruso/ctr-test-restifyts:1.0.0