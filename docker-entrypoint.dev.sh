#!/bin/sh
set -e

# If Node_modules directory empty then install node_mdoules
if [ -z "$(ls -A /usr/src/app/node_modules)" ]; then
yarn
fi

if [ "${1#-}" != "${1}" ] || [ -z "$(command -v "${1}")" ]; then
  set -- node "$@"
fi

exec "$@"