#should add env variables: CR_PAT && ROBIN_HOOD_VERSION
echo $CR_PAT | docker login ghcr.io -u facundobocalandro --password-stdin
docker build . --tag ghcr.io/facundobocalandro/robin-hood-client:$ROBIN_HOOD_VERSION
docker push ghcr.io/facundobocalandro/robin-hood-client:$ROBIN_HOOD_VERSION
