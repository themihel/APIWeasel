#!/bin/bash
if [ "$TRAVIS_BRANCH" == "master" ]; then
  touch dist/.surgeignore && echo '!bower_components/' > dist/.surgeignore;
  surge --project ./dist --domain apiweasel.themihel.me
fi
