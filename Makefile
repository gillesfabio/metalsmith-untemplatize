NODE_LOCAL_BIN=./node_modules/.bin

node_modules: package.json
	@npm install

.PHONY: test
test: node_modules
	@${NODE_LOCAL_BIN}/mocha --reporter spec
