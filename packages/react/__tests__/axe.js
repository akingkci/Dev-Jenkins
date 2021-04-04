import { configureAxe } from 'jest-axe';

const axe = configureAxe({
  rules: {
		 	//****************************************************************
		 	//*** START OF TTv5-Friendly and verified as of axe-core 3.5  ****
		 	//****************************************************************
			'aria-allowed-role': {enabled: true},
			'aria-valid-attr-value': {enabled: true},
			'aria-hidden-focus': {enabled: true},
			'aria-input-field-name': {enabled: true},
			'aria-toggle-field-name': {enabled: true},
			'button-name': {enabled: true},
			'color-contrast': {enabled: true},
			'document-title': {enabled: true},
			'duplicate-id': {enabled: true},
			'empty-heading': {enabled: true},
			'form-field-multiple-labels': {enabled: true},
			'frame-title': {enabled: true},
			'frame-title-unique': {enabled: true},
			'html-has-lang': {enabled: true},
		 	'html-lang-valid': {enabled: true},
		 	'image-alt': {enabled: true},
		 	'input-button-name': {enabled: true},
		 	'input-image-alt': {enabled: true},
		 	'label': {enabled: true},
		 	'link-name': {enabled: true},
		 	'list': {enabled: true},
		 	'listitem': {enabled: true},
		 	'role-img-alt': {enabled: true},
		 	'scope-attr-valid': {enabled: true},
		 	'scrollable-region-focusable': {enabled: true},
		 	'td-headers-attr': {enabled: true},
		 	'valid-lang': {enabled: true},

		 	//*********************************************************************************
		 	//*** START OF Rules to turn off for TTv5-Friendly testing as of axe-core v3.5 ****
		 	//*********************************************************************************

		 	'accesskeys': {enabled: false},
		 	'aria-valid-attr-value': {enabled: false},
		 	'aria-valid-attr': {enabled: false},
		 	'audio-caption': {enabled: false},
		 	'autocomplete-valid': {enabled: false},
		 	'avoid-inline-spacing': {enabled: false},
		 	'blink': {enabled: false},
		 	'bypass': {enabled: false},
		 	'checkboxgroup': {enabled: false},
		 	'duplicate-id-active': {enabled: false},
		 	'duplicate-id-aria': {enabled: false},
			'landmark-one-main': {enabled: false},
			'region': {enabled: false},		 	
		 	'area-alt': {enabled: false},
		 	'aria-allowed-attr': {enabled: false},		 	
		 	'aria-dpub-role-fallback': {enabled: false},
		 	'aria-hidden-body': {enabled: false},
		 	'aria-required-attr': {enabled: false},
		 	'aria-required-children': {enabled: false},
		 	'aria-required-parent': {enabled: false},
		 	'aria-roledescription': {enabled: false},
			'aria-roles': {enabled: false},
		 	'css-orientation-lock': {enabled: false},
		 	'definition-list': {enabled: false},
		 	'dlitem': {enabled: false},
		 	'focus-order-semantics': {enabled: false},		 	
		 	'frame-tested': {enabled: false},
		 	'heading-order': {enabled: false},
		 	'hidden-content': {enabled: false},
		 	'html-xml-lang-mismatch': {enabled: false},		 	
//  	'img-redundant-alt': {enabled: false}, //-rule deprecated
		 	'label-content-name-mismatch': {enabled: false},
		 	'label-title-only': {enabled: false},		 	
		 	'landmark-banner-is-top-level': {enabled: true},
		 	'landmark-complementary-is-top-level': {enabled: true},
		 	'landmark-contentinfo-is-top-level': {enabled: true},
		 	'landmark-main-is-top-level': {enabled: true},
		 	'landmark-no-duplicate-banner': {enabled: false},
		 	'landmark-no-duplicate-contentinfo': {enabled: false},
		 	'landmark-no-duplicate-main': {enabled: true},
		 	'landmark-one-main': {enabled: true},
		 	'landmark-unique': {enabled: true},
		 	'layout-table': {enabled: false},
			'link-in-text-block': {enabled: false},
		 	'marquee': {enabled: false},
		 	'meta-refresh': {enabled: false},
		 	'meta-viewport-large': {enabled: false},
		 	'meta-viewport': {enabled: false},
		 	'object-alt': {enabled: false},
		 	'p-as-heading': {enabled: false},
		 	'page-has-heading-one': {enabled: false},
		 	'radiogroup': {enabled: false},
		 	'region': {enabled: false},		 	
		 	'server-side-image-map': {enabled: false},
		 	'skip-link': {enabled: false},
		 	'tabindex': {enabled: false},
		 	'table-duplicate-name': {enabled: false},
		 	'table-fake-caption': {enabled: false},
		 	'td-has-header': {enabled: false},		 	
		 	'th-has-data-cells': {enabled: false},
		 	'video-caption': {enabled: false},
		 	'video-description': {enabled: false},
		 	'svg-img-alt': {enabled: false},
		 	'identical-links-same-purpose': {enabled: false},
		 	'image-redundant-alt': {enabled: false}
  }
});

module.exports = axe;
