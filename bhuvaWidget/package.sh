#!/usr/bin/env bash

npm run build
mkdir -p ../static/assets
cp dist/bhuvaWidget/*.js ../static
cp -R dist/bhuvaWidget/assets ../static
