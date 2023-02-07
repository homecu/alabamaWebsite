import React, { useLayoutEffect } from "react";
import { Router } from "@reach/router";
import {
  AboutUsPage,
  aboutUsTemplatesVersionVariantsTypes, // Variantes de plantillas para el About Us
  colorsTypes, // Variantes de colores (GENERALMENTE SE UTILIZA ESTE)
  colorsVariantsTypes, // Variantes de colores (SOLO EN ALGUNOS CASOS)
  ContactUsPage,
  contactUsTemplatesVersionVariantsTypes, // Variantes de plantillas para el Contact Us
  DynamicPage,
  dynamicTemplatesVersionVariantsTypes,
  fontsFamiliesTypes, // Variantes de plantillas para las paginas dinámicas
  // fontsFamiliesTypes, // Variantes de tipos de fuentes para los textos
  HomePage,
  homeTemplatesVersionVariantTypes, // Variantes de plantillas para el Home
  textSizesVariantsTypes, // Variantes de tamaño de textos
  loginVariantTypes,
} from "@hellobuild/blossom-websites-core-package";

import templateVariantSettings from "config";

// import { HOMEPAGE_DATA_MODEL } from "data/cms-models";

function IndexPage() {
  // Personalizar boton de login en el menu de navegación (DESKTOP)
  const headerLoginButtonStyles = {
    variant: loginVariantTypes.FORM,
    grayscale: true, //  Habilitar o des-habilitar escala de grises
    // hoverGrayscaleFillBackgroundColor: colorsTypes.PRIMARY_DARK, //  Cambiar el color de fondo en su estado (hover) y con la escala de grises habilitada
    // hoverGrayscaleBorderColor: colorsTypes.PRIMARY_DARK, //  Cambiar el color de bordes en su estado (hover) y con la escala de grises habilitada
    // hoverGrayscaleFilledTextColor: colorsTypes.WHITE, // Color de fondo en su estado HOVER (solo aplica cunado la propiedad grayscale es TRUE y cuando la propiedad fill es FILLED)
    // grayscaleAndOFilledTextColor: colorsTypes.WHITE, // Color de textos (solo aplica cunado la propiedad grayscale es TRUE y cuando la propiedad fill es FILLED)
    background: colorsTypes.WHITE, // Color de fondo
    borderColor: colorsTypes.WHITE, // Color de bordes
    color: colorsTypes.PRIMARY_DARK, //  Cambiar el color de textos
    hoverBackground: colorsTypes.BLACK, // Color de fondo en su estado (HOVER)
    hoverBorderColor: colorsTypes.BLACK, // Color de bordes en su estado (HOVER)
    hoverColor: colorsTypes.WHITE, //  Cambiar el color de textos en su estado (HOVER)
    scrollBackground: colorsTypes.PRIMARY, // Color de fondo después de hacer SCROLL
    scrollBorderColor: colorsTypes.WHITE, // Color de bordes después de hacer SCROLL
    scrollColor: colorsTypes.PRIMARY_DARK, //  Cambiar el color de textos después de hacer SCROLL
    hoverScrollBackground: colorsTypes.PRIMARY_DARK, // Color de fondo después de hacer scroll en su estado (HOVER)
    hoverScrollBorderColor: colorsTypes.PRIMARY_DARK, // Color de bordes después de hacer scroll en su estado (HOVER)
    hoverScrollColor: colorsTypes.WHITE, // Color de textos después de hacer scroll en su estado (HOVER)
  };

  // Personalizar boton de login en el menu de navegación (MOBILE)
  const headerMobileLoginButtonStyles = {
    grayscale: true, //  Habilitar o des-habilitar escala de grises
    withoutBorderRadius: true, //  Habilitar o des-habilitar escala de grises
    isScrollChangeColorButton: true, //  Habilitar o des-habilitar es cambio de color al hacer SCROLL
    // hoverGrayscaleFillBackgroundColor: colorsTypes.PRIMARY_DARK, //  Cambiar el color de fondo en su estado (hover) y con la escala de grises habilitada
    // hoverGrayscaleBorderColor: colorsTypes.PRIMARY_DARK, //  Cambiar el color de bordes en su estado (hover) y con la escala de grises habilitada
    // hoverGrayscaleFilledTextColor: colorsTypes.WHITE, // Color de fondo en su estado HOVER (solo aplica cunado la propiedad grayscale es TRUE y cuando la propiedad fill es FILLED)
    // grayscaleAndOFilledTextColor: colorsTypes.WHITE, // Color de textos (solo aplica cunado la propiedad grayscale es TRUE y cuando la propiedad fill es FILLED)
    background: colorsTypes.PRIMARY_DARK, // Color de fondo
    borderColor: colorsTypes.PRIMARY_DARK, // Color de bordes
    color: colorsTypes.WHITE, //  Cambiar el color de textos
    hoverBackground: colorsTypes.PRIMARY_DARK, // Color de fondo en su estado (HOVER)
    hoverBorderColor: colorsTypes.PRIMARY_DARK, // Color de bordes en su estado (HOVER)
    hoverColor: colorsTypes.WHITE, //  Cambiar el color de textos en su estado (HOVER)
    scrollBackground: colorsTypes.PRIMARY_DARK, // Color de fondo después de hacer SCROLL
    scrollBorderColor: colorsTypes.PRIMARY_DARK, // Color de bordes después de hacer SCROLL
    scrollColor: colorsTypes.WHITE, //  Cambiar el color de textos después de hacer SCROLL
    hoverScrollBackground: colorsTypes.PRIMARY_DARK, // Color de fondo después de hacer scroll en su estado (HOVER)
    hoverScrollBorderColor: colorsTypes.PRIMARY_DARK, // Color de bordes después de hacer scroll en su estado (HOVER)
    hoverScrollColor: colorsTypes.WHITE, // Color de textos después de hacer scroll en su estado (HOVER)
  };

  // Personalizar boton de login en el Dropdown del menu de navegación
  const headerDropdownLoginButtonStyles = {
    hoverFilledBackgroundColor: colorsTypes.PRIMARY, //  Cambiar el color de fondo en su estado (hover)
    hoverFilledBorderColor: colorsTypes.PRIMARY, //  Cambiar el color de bordes en su estado (hover)
    hoverFilledTextColor: colorsTypes.WHITE, //  Cambiar el color de texto en su estado (hover)
  };

  //  Propiedades comunes entre los Pages/Paginas
  const commonProps = {
    config: templateVariantSettings, // Configuración inicial de la plantilla
    //  Configuración personalizada del Navigation Bar (Menu de Navegación)
    floatHeader: true,
    navigationMenuOptions: {
      // Cambiar la altura del sub-menu de navegacion
      dropdownSeparationFromBottom: 7,
      menuActiveBorderColor: "#002142",
      menuSubLinksTitleActiveColor: "#000000",
      menuSubItemTitleColor: "#000000",
      menuSubItemTextColor: "#999999",

      grayscale: true,
      dropdownHoverBackground: colorsVariantsTypes.TRANSPARENT,
      subItemTextColor: "red",
      subMenuActiveBackgroundColor: colorsTypes.BLACK,
      backgroundScreenActive: true,
      topIndicator: false,
    },
    // Personalizar Footer
    footerOptions: {
      customIconsAlt: "",
    },
    customIconsAlt: "",
    //  HEADER  –>  DESKTOP  –>  START
    headerDropdownLoginButtonStyles,
    headerLoginButtonStyles,
    headerMobileLoginButtonStyles,
    headerLogoReplaceImageWith: "", // Remplazar imagen de logo en el NavBar
    headerForceShow: true, //  Forzar la visualizacion del NavBar
    headerLogoFilterEffect: ["invert()", "grayscale(1)", "saturate(0)"], // Tipos de filtros para el icono del menu de navegación (NavBar)
    // headerLogoFilterEffectAfterScroll: ["none"], // Tipos de filtros para el icono del menu de navegación (NavBar) después de hacer SCROLL
    // // headerLogoReplaceImageWith: "", // Remplazar imagen de logo en el NavBar
    // headerLogoReplaceImageWithAfterBreakpoint: `url("https://olb-assets.s3.us-east-2.amazonaws.com/images/Healthcare+Service+CU+Logo+Blue.svg")`, // Remplazar imagen de logo en el NavBar después de hacer SCROLL
    // headerActiveLogoReplaceImageWith: `url("https://olb-assets.s3.us-east-2.amazonaws.com/images/Healthcare+Service+CU+Logo+Blue.svg")`, // Remplazar imagen de logo en el NavBar ACTIVO
    headerBackgroundAfterBreakpoint:
      " linear-gradient(90.3deg,rgba(85, 41, 6, 0.3) -4.05%,rgba(85, 41, 6, 0.3) -4.04%,rgba(170, 95, 7, 0.3) 71.16%); ", //  Color de fondo del menu de navegación después de hacer SCROLL
    backgroundAfterBreakpointHoverHeader: "rgba(0, 16, 31, 0.4)", // Color de fondo del menu de navegación después de hacer SCROLL en su estado Hover
    headerActiveBackground: colorsTypes.WHITE, // Color de fondo del menu de navegación en su estado Activo
    headerHoverActiveBackground: colorsTypes.WHITE, //  Color de fondo del menu de navegación en su estado Activo y Hover
    headerTransparentBackground: "rgba(0, 16, 31, 0.4)", //  Color de fondo del menu de navegación en su estado Transparente
    headerHoverTransparentBackground: "rgba(0, 16, 31, 0.4)", //  Color de fondo del menu de navegación en su estado Transparente & Hover
    // backgroundScreenHeader: false, // Habilitar o Deshabilitar background de tipo sombra al abrir el menu de navegación
    noFilterLogoHeader: true, //
    // headerNoFilterMenuIcon: true, // Forzar el no filtrar el icon del menu
    headerForceFilterMenuIcon: true, // Forzar el filtrado del icon del menu
    //  Props adicionales para el icono del menu en el navbar
    headerMenuIconStyles: {
      filterEffect: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono
      filterEffectAfterScroll: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono después de hacer SCROLL
      activeFilterEffectAfterScroll: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono cuando el MENU esta ACTIVADO y después de hacer SCROLL
      // mobileFilterEffect: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono en MOBILE
      // mobileFilterEffectAfterScroll: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono en MOBILE después de hacer SCROLL
      // mobileActiveFilterEffectAfterScroll: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono en MOBILE cuando el MENU esta ACTIVO después de hacer SCROLL
    },
    //  HEADER  –>  DESKTOP  –>  END

    //  HEADER  –>  MOBILE  –>  START
    // headerMobileLogoReplaceImageWith: `url("https://olb-assets.s3.us-east-2.amazonaws.com/images/Healthcare+Service+CU+Logo+Blue.svg")`, // Remplazar imagen de logo en el NavBar
    // headerMobileActiveLogoReplaceImageWith: `url("https://olb-assets.s3.us-east-2.amazonaws.com/images/Healthcare+Service+CU+Logo+Blue.svg")`, // Remplazar imagen de logo en el NavBar MOBILE ACTIVO
    // headerMobileLogoReplaceImageWithAfterBreakpoint: `url("https://olb-assets.s3.us-east-2.amazonaws.com/images/Healthcare+Service+CU+Logo+Blue.svg")`, // Remplazar imagen de logo en el NavBar después de hacer SCROLL
    // headerMobileLoginButtonIsScrollChangeColorButton: false, // Permite cambiar de colo al boton de LOGIN que esta en el NavBar después de hacer SCROLL
    // headerMobileActiveLogoReplaceImageWithAfterBreakpoint: `url("https://olb-assets.s3.us-east-2.amazonaws.com/images/Healthcare+Service+CU+Logo+Blue.svg")`, // Remplazar imagen de logo en el NavBar ACTIVO y después de hacer SCROLL
    // headerMobileLogoFilterEffect: ["none"], // Tipos de filtros para el icono del menu de navegación (NavBar)
    // headerMobileLogoFilterEffectAfterScroll: ["none"], // Tipos de filtros para el icono del menu de navegación (NavBar) después de hacer SCROLL
    // headerMobileFilterEffect: [], // Tipos de filtros para el fondo del menu de navegación (NavBar)
    // headerMobileFilterEffectAfterScroll: ["none"], // Tipos de filtros para el fondo del menu de navegación (NavBar) después de hacer SCROLL
    // headerMobileActiveLogoFilterEffectAfterScroll: ["none"], // Tipos de filtros para el icono del menu de navegación (NavBar ACTIVO) después de hacer SCROLL
    // headerMobileMenuIconFilterEffect: ["invert()", "grayscale(1)", "saturate(0)"], // Tipos de filtros para el icon del menu de navegación en el (NavBar)
    // headerMobileMenuIconFilterEffectAfterScroll: ["invert()", "grayscale(1)", "saturate(0)"], // Tipos de filtros para el icon del menu de navegación en el (NavBar) después de hacer SCROLL
    // headerMobileMenuIconActiveFilterEffectAfterScroll: ["none"], // Tipos de filtros para el icon del menu de navegación en el (NavBar ACTIVO) después de hacer SCROLL
    // headerMenuIconFilterEffect: ["invert()", "grayscale(1)", "saturate(0)"], // Tipos de filtros para el icon del menu de navegación en el (NavBar)
    // headerMenuIconFilterEffectAfterScroll: ["invert()", "grayscale(1)", "saturate(0)"], // Tipos de filtros para el icon del menu de navegación en el (NavBar) después de hacer SCROLL
    // headerMenuIconActiveFilterEffectAfterScroll: ["none"], // Tipos de filtros para el icon del menu de navegación en el (NavBar ACTIVO) después de hacer SCROLL
    // headerMobileActiveLogoFilterEffect: ["none"], // Tipos de filtros para el icono del menu de navegación (NavBar ACTIVO)
    headerMobileBackgroundAfterBreakpoint: colorsTypes.WHITE, // Color de fondo del menu de navegación después de hacer SCROLL
    headerMobileBackgroundAfterBreakpointHover: colorsTypes.WHITE, // Color de fondo del menu de navegación después de hacer SCROLL
    headerMobileForceShow: true, //  Forzar la visualizacion del NavBar (MOBILE)
    headerMobileTransparent: false, //  NavBar Transparente
    headerMobileNoFilterLogo: true, // Forzar el no filtrar el logo del navbar
    headerMobileNoFilterMenuIcon: true, // Forzar el no filtrar el icono del menu en el navbar
    headerMobileForceFilterMenuIcon: false, // Filtrado forzoso del icono del menu en el navbar
    headerMobileBackgroundMenu: colorsTypes.WHITE, //  Color de fondo del Dropdown (Sub-menus)
    headerMobileBackground: colorsTypes.WHITE, //  Color de fondo del navbar
    headerMobileActiveBackground: colorsTypes.WHITE, //  Color de fondo del navbar en su estado ACTIVO
    headerMobileHoverActiveBackground: colorsTypes.WHITE, //  Color de fondo del navbar en su estado ACTIVO & HOVER
    headerMobileLoginButtonScrollBackgroundAfterScroll: colorsTypes.WHITE, //  Color de fondo del  boton de logon en el NavBar después de hacer SCROLL
    headerMobileTransparentBackground: colorsTypes.WHITE, //  Color de fondo del navbar (solo funciona cuando la propiedad TRANSPARENT es TRUE)
    headerMobileHoverFloatBackground: colorsTypes.WHITE, //  Color de fondo del navbar (solo funciona cuando la propiedad FLOAT es TRUE) en esu estado HOVER
    // headerMobileLoginButtonScrollBackground: colorsTypes.WHITE, //  Color de fondo del boton de login en el navbar (solo funciona cuando se hizo SCROLL)
    headerMobileHoverTransparentBackground: colorsTypes.WHITE, //  Color de fondo del boton de login en el navbar (solo funciona cuando la propiedad TRANSPARENT es TRUE) (solo funciona cuando se hizo SCROLL) en esu estado HOVER
    headerMobileLogoFilter: undefined, //  Filtra Logo del navbar
    //  Props adicionales para el icono del menu en el navbar
    headerMobileMenuIconStyles: {
      mobileFilterEffect: ["invert()", "grayscale(1)", "saturate(0)"], //  Filtro personalizado para el icono en MOBILE
      mobileFilterEffectAfterScroll: ["none"], //  Filtro personalizado para el icono en MOBILE después de hacer SCROLL
      mobileActiveFilterEffectAfterScroll: ["none"], //  Filtro personalizado para el icono en MOBILE cuando el MENU esta ACTIVO después de hacer SCROLL
    },
    //  HEADER  –>  MOBILE  –>  END
  };

  // Personalizar Tabs
  const tabsProps = {
    // Personalizar Tab
    tabOptions: {
      hiddenDivider: true, // Ocultar linea de division
      showAllBorders: true, //  Mostrar todos los bordes
      color: colorsVariantsTypes.LIGHT, // Color de textos
      fontSize: textSizesVariantsTypes.SMALL, //  Tamaño de textos
      activeBackgroundColor: colorsVariantsTypes.WHITE, //  Color de fondo en su estado activo
      oneLine: false, //  Textos en una solo linea
      backgroundColor: colorsVariantsTypes.VERY_ULTRA_LIGHT, // Color de fondo
      width: "100%", //  Ancho
      height: "100%", //  Alto
      padding: "15px 25px", // Espaciado interno del contendor
    },
  };

  // Personalizar Hero's
  const heroProps = {
    // Personalizar estilos de los botones
    buttonStylesProps: {
      grayscale: true, // Habilitar o des-habilitar escala de grises
      hoverGrayscaleFillBackgroundColor: colorsTypes.PRIMARY_DARK, // Cambiar color de fondo en su estado (hover) y cuando esta habilitada la escala de grises (SOLO APLICA CUANDO EL VALOR FILL ES FILLED)
      hoverGrayscaleBorderColor: colorsTypes.PRIMARY_DARK, // Cambiar color de bordes en su estado (hover) y cuando esta habilitada la escala de grises
      hoverGrayscaleFilledTextColor: colorsTypes.WHITE, // Cambiar color de textos en su estado (hover) y cuando esta habilitada la escala de grises (SOLO APLICA CUANDO EL VALOR FILL ES FILLED)
      grayscaleAndOFilledTextColor: colorsTypes.PRIMARY_DARK,
      fontSize: textSizesVariantsTypes.VERY_SMALL, //  Tamaño de textos
      padding: "10px 30px", //  Espaciado interno
    },
  };

  //  Personalizar Productos
  const productsProps = {
    subTitleFontFamily: fontsFamiliesTypes.PRIMARY, //  Tipo de fuente del sub títulos
    titleFontFamily: fontsFamiliesTypes.SECONDARY, // Tipo de fuente del títulos
    getData: data => ({
      data: data.Products,
    }),
  };

  const footerFirstLogoOnClick = () => {
    if (!window || !window.document || !document) {
      setTimeout(footerFirstLogoOnClick, 350);

      return;
    }

    const footerFirstLogo =
      document.querySelector(".FOOTER__BUSINESS_LOGO:first-child") ||
      document.querySelector(
        "footer > div:first-child > *:nth-child(2) > *:nth-child(3) > *:nth-child(1) > *:nth-child(1)",
      );

    const footerSecondLogo =
      document.querySelector(".FOOTER__BUSINESS_LOGO:nth-child(2)") ||
      document.querySelector(
        "footer > div:first-child > *:nth-child(2) > *:nth-child(3) > *:nth-child(1) > *:nth-child(2)",
      );
    const icons = document.querySelectorAll(".tw-inline-block.tw-mr-3");

    if (!footerFirstLogo) {
      setTimeout(footerFirstLogoOnClick, 350);

      return;
    }

    footerFirstLogo.setAttribute("alt", "NCUA redirect");
    footerSecondLogo.setAttribute("alt", "Equal Housing redirect");

    icons.forEach(icon => icon.setAttribute("alt", ""));
    const newA = document.createElement("a");
    newA.setAttribute("href", "https://www.ncua.gov");
    newA.style.cssText = "position: absolute; width: 200px; height: 70px";
    newA.classList.add("FOOTER__BUSINESS_LOGO_LINK");
    footerFirstLogo.parentElement.appendChild(newA);
  };

  useLayoutEffect(() => {
    setTimeout(footerFirstLogoOnClick, 3000);
  }, []);

  return (
    <Router>
      <HomePage
        {...commonProps}
        config={templateVariantSettings}
        variant={homeTemplatesVersionVariantTypes.HOME_TEMPLATE_V9}
        path="/"
        // Forzar el uso de un Template
        // forceCustomVariant
        // variant={homeTemplatesVersionVariantTypes.HOME_TEMPLATE_V5}
        headerMobileNoFilterMenuIcon={false} // Forzar el no filtrar el icono del menu en el navbar
        headerForceShow={false} //  Forzar la visualizacion del NavBar
        headerMobileLogoReplaceImageWith="" // Remplazar imagen de logo en el NavBar
        headerMobileForceShow={false} //  Forzar la visualizacion del NavBar
        headerMobileBackgroundAfterBreakpoint={colorsTypes.WHITE} // Color de fondo del menu de navegación después de hacer SCROLL
        headerMobileTransparentBackground={colorsTypes.TRANSPARENT} //  Color de fondo del navbar (solo funciona cuando la propiedad TRANSPARENT es TRUE)
        headerMobileHoverTransparentBackground={colorsTypes.TRANSPARENT} //  Color de fondo del boton de login en el navbar (solo funciona cuando la propiedad TRANSPARENT es TRUE) (solo funciona cuando se hizo SCROLL) en esu estado HOVER
        headerMobileBackgroundAfterBreakpointHover={colorsTypes.WHITE} // Color de fondo del menu de navegación después de hacer SCROLL
        headerTransparentBackground={colorsTypes.TRANSPARENT} //  Color de fondo del menu de navegación en su estado Transparente
        headerHoverTransparentBackground={colorsTypes.TRANSPARENT} // Color de fondo del menu de navegación en su estado Transparente y Hover
        // Personalizar Hero
        heroProps={heroProps}
        // Personalizar Lista de Productos e items
        productsProps={productsProps}
        // Personalizar Feature
        featureProps={{
          variant: "V4",
          // Personalizar botones
          buttonStylesProps: {
            hoverGrayscaleOutlineBackgroundColor: colorsTypes.WHITE, // Color de fondo en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
            hoverGrayscaleOutlineBorderColor: colorsTypes.WHITE, // Color de borders en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
            hoverGrayscaleOutlineDarkTextColor: colorsTypes.PRIMARY, // Color de textos en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
          },
        }}
        // Personalizar Feature Full
        featureFullProps={{
          buttonStylesProps: {
            hoverGrayscaleOutlineBackgroundColor: colorsTypes.WHITE, // Color de fondo en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
            hoverGrayscaleOutlineBorderColor: colorsTypes.WHITE, // Color de borders en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
            hoverGrayscaleOutlineDarkTextColor: colorsTypes.PRIMARY, // Color de textos en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
          },
        }}
        // Personalizar Callout
        calloutProps={{}}
        // Personalizar Callout Mobile
        calloutMobileProps={{}}
        // Personalizar Callout Compressed
        calloutCompressedProps={{}}
        // Personalizar Tabs
        tabsProps={tabsProps}
      />

      <AboutUsPage
        {...commonProps}
        path="/about-us"
        variant={aboutUsTemplatesVersionVariantsTypes.ABOUT_US_TEMPLATE_V3}
        // Personalizar Page Header
        pageHeaderProps={{}}
        // Personalizar Body Text
        bodyTextProps={{}}
        // Personalizar Callout Text
        calloutTextProps={{}}
        // Personalizar Callout Button
        calloutButtonProps={{}}
        // Personalizar Tabs
        tabsProps={tabsProps}
      />

      <ContactUsPage
        {...commonProps}
        path="/contact-us"
        variant={contactUsTemplatesVersionVariantsTypes.CONTACT_US_TEMPLATE_V10}
        // Personalizar Submit Button
        submitButton={{}}
        // Personalizar Header
        pageHeaderProps={{}}
        // Personalizar Page Title
        pageTitleProps={{}}
        // Personalizar Contact
        contactProps={{}}
        // Personalizar Branch
        branchProps={{}}
        // Personalizar  Callout
        calloutProps={{}}
        // Personalizar  Callout Mobile With Gradient
        calloutMobileWithGradientPros={{}}
        // Personalizar Tabs
        tabsProps={tabsProps}
      />

      <DynamicPage
        {...commonProps}
        variant={dynamicTemplatesVersionVariantsTypes.DYNAMIC_TEMPLATE_V9}
        path="/:id"
        // Personalizar Custom Page
        customPageProps={{
          ...commonProps.customPageProps,
          // Personalizar Componentes
          customComponentStyles: {
            // Personalizar de Hero's
            hero: {
              // Personalizar de Hero's de tipo Dynamic
              dinamic: {
                // Titulo
                title: {
                  fontSize: "62px", // Tamaño del titulo
                },
                // Sub titulo
                subTitle: {
                  fontSize: "26px", // Tamaño de los sub titulo
                  fontFamily: "var(--secondary-family)", // Tipo de fuente de los sub titulo
                },
                img: {},
              },
            },
          },
        }}
        // Personalizar Hero
        heroProps={{}}
        // Personalizar Lista de Productos
        productsProps={{}}
        // Personalizar Feature Full
        featureFullProps={{
          buttonStylesProps: {
            hoverGrayscaleOutlineBackgroundColor: colorsTypes.WHITE, // Color de fondo en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
            hoverGrayscaleOutlineBorderColor: colorsTypes.WHITE, // Color de borders en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
            hoverGrayscaleOutlineDarkTextColor: colorsTypes.PRIMARY, // Color de textos en su estado hover (solo aplica cuando la propiedad grayscale es true y cuando la propiedad fill es OUTLINE)
          },
        }}
        // Personalizar Feature
        featureProps={{}}
        // Personalizar Callout
        calloutProps={{}}
        // Personalizar Callout Mobile
        calloutMobileProps={{}}
        // Personalizar Callout Compressed
        calloutCompressedProps={{}}
        // Personalizar Tabs
        tabsProps={tabsProps}
      />
    </Router>
  );
}

export default IndexPage;
