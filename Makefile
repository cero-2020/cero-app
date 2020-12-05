RELEASE=$(shell TZ='Europe/Kiev' date +'%y%m%d.%H')
GLOBIGNORE=.git
release: deploy node_modules
	yarn build
	cd deploy && rm -v * && rm -fr deploy
	cp -r build/. deploy
	cd deploy &&\
 		git add -f . &&\
 		git commit -m "release ${RELEASE}" &&\
 		git push
	@echo "released on https://cero-2020.github.io"
deploy:
	git clone git@github.com:cero-2020/cero-2020.github.io.git deploy
node_modules:
	yarn
