#! /bin/bash

SCRIPT_PATH="$(cd "$( dirname "$0" )" && pwd )"

mkdir "${SCRIPT_PATH}"/fu-test
"${SCRIPT_PATH}"/../fu project "${SCRIPT_PATH}"/fu-test/
rm -r "${SCRIPT_PATH}"/fu-test
