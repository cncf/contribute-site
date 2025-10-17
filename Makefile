# cSpell:ignore htmltest refcache
REFCACHE?=refcache
HTMLTEST_DIR=tmp
HTMLTEST?=htmltest
HTMLTEST_ARGS?=--log-level 1
LINK_CACHE_FILE?=refcache.json
LINK_CACHE_FILE_DEST_DIR?=static
LINK_CACHE_FILE_SRC_DIR?=$(HTMLTEST_DIR)/.htmltest

# Use $(HTMLTEST) in PATH, if available; otherwise, we'll get a copy
ifeq (, $(shell which $(HTMLTEST)))
override HTMLTEST=$(HTMLTEST_DIR)/bin/htmltest
ifeq (, $(shell which $(HTMLTEST)))
GET_LINK_CHECKER_IF_NEEDED=get-link-checker
endif
endif

.PHONY: check-links check-links-only refcache-restore refcache-save clean get-link-checker

check-links: $(GET_LINK_CHECKER_IF_NEEDED) refcache-restore check-links-only refcache-save

check-links-only:
	$(HTMLTEST) $(HTMLTEST_ARGS)

refcache-restore: $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE) $(LINK_CACHE_FILE_SRC_DIR)
ifeq (refcache, $(REFCACHE))
	cp $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE) $(LINK_CACHE_FILE_SRC_DIR)/
endif

refcache-save:
ifeq (refcache, $(REFCACHE))
	cp $(LINK_CACHE_FILE_SRC_DIR)/$(LINK_CACHE_FILE) $(LINK_CACHE_FILE_DEST_DIR)/
	npx prettier --prose-wrap=always --write $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE)
endif

$(LINK_CACHE_FILE_SRC_DIR):
	mkdir -p $(LINK_CACHE_FILE_SRC_DIR)

$(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE):
	mkdir -p $(LINK_CACHE_FILE_DEST_DIR)
	echo '{}' > $(LINK_CACHE_FILE_DEST_DIR)/$(LINK_CACHE_FILE)

clean:
	rm -rf $(HTMLTEST_DIR)

get-link-checker:
	rm -Rf $(HTMLTEST_DIR)/bin
	curl https://htmltest.wjdp.uk | bash -s -- -b $(HTMLTEST_DIR)/bin
