# Meetera

## Docker

### Docker commands to set up the environment
Set PowerShell path to E:\PROGRAMOWANIE\Meetera\backend
docker build -t meetera-api-image -f docker/Dockerfile . (build docker image)
docker run -d -p 8080:80 --name meetera-api meetera-api-image (run container with image)
docker ps (check if the container is running)
