SHELL := /bin/bash
PUBLIC_FOLDER := public/


.ONESHELL:

.PHONY: all clean

all: serve

build-production: clean
	make build

deploy-production: build-production
	NETLIFY_SITE_ID=$(NETLIFY_SITE_ID) netlify deploy --prod --auth $(NETLIFY_AUTH_TOKEN) --dir $(PUBLIC_FOLDER)

# build: clean
	# CONTENTFUL_SPACE_ID=$(CONTENTFUL_SPACE_ID) CONTENTFUL_ACCESS_TOKEN=$(CONTENTFUL_ACCESS_TOKEN) yarn run build

serve: clean
	yarn run dev

clean:
	find . -name "*~" -exec rm {} -v \;
	find . -name "*#" -exec rm {} -v \;
	rm -vfr public/
