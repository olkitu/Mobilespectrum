'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">MobileSpectrum Documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-7c05582d19e285827aebafc3c71ba0ea6634bb224f82eb34fc01fcad29e8225b8f97268d224ca461026b153b2a4d2d7307cf96c335bbde3dda88a85089c13eaf"' : 'data-target="#xs-components-links-module-AppModule-7c05582d19e285827aebafc3c71ba0ea6634bb224f82eb34fc01fcad29e8225b8f97268d224ca461026b153b2a4d2d7307cf96c335bbde3dda88a85089c13eaf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-7c05582d19e285827aebafc3c71ba0ea6634bb224f82eb34fc01fcad29e8225b8f97268d224ca461026b153b2a4d2d7307cf96c335bbde3dda88a85089c13eaf"' :
                                            'id="xs-components-links-module-AppModule-7c05582d19e285827aebafc3c71ba0ea6634bb224f82eb34fc01fcad29e8225b8f97268d224ca461026b153b2a4d2d7307cf96c335bbde3dda88a85089c13eaf"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FrequenciesBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FrequenciesBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SpectrumPagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SpectrumPagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' : 'data-target="#xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' :
                                            'id="xs-components-links-module-AppServerModule-f9bd8a2e383e1fdb89b720482f275daf4d52b1791e7f4a876525a64e6683f175d787e6648760b5c33b83cc499537f1610a22f454735802bee0d2d5888220fb91"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CommonServiceService.html" data-type="entity-link" >CommonServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpStatusCodeService.html" data-type="entity-link" >HttpStatusCodeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Bands.html" data-type="entity-link" >Bands</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DownLink.html" data-type="entity-link" >DownLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Frequencies.html" data-type="entity-link" >Frequencies</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Frequency.html" data-type="entity-link" >Frequency</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Provider.html" data-type="entity-link" >Provider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Provider2.html" data-type="entity-link" >Provider2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Source.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UpLink.html" data-type="entity-link" >UpLink</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Valid.html" data-type="entity-link" >Valid</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});