# Contribuyendo a caja de ritmos

¡En primer lugar, gracias por tomarse el tiempo para contribuir! ❤️

Todo tipo de contribución es valorada. Mira la [Tabla de Contenidos](#tabla-de-contenidos) para conocer las diferentes formas de ayudar y los detalles sobre cómo los maneja este proyecto. Por favor, asegúrese de leer la sección correspondiente antes de hacer su contribución. Hará que sea mucho más fácil para nosotros los mantenedores y suavizará la experiencia para todos los involucrados. La comunidad espera sus contribuciones. 🎉

> Y si te gusta el proyecto, pero no tienes tiempo para contribuir, está bien. Hay otras formas sencillas de apoyar el proyecto y mostrar su agradecimiento, que también nos encantaría:
> - Dale una estrella al proyecto
> - Tweetea sobre el proyecto
> - Refiere este proyecto en el readme de tus proyectos
> - Menciona el proyecto en reuniones locales y cuéntaselo a tus amigos/colegas

## Tabla de contenidos

- [Código de conducta](#código-de-conducta)
- [Tengo una pregunta](#tengo-una-pregunta)
- [Quiero contribuir](#quiero-contribuir)
  - [Reportando errores](#reportando-errores)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Tu primera contribución de código](#tu-primera-contribución-de-codigo)
  - [Mejorando la documentación](#mejorando-la-documentación)
- [Guías de estilo](#guías-de-estilo)
  - [Mensajes-commit](#mensajes-commit)
- [Únete al equipo](#únete-al-equipo)


## Código de conducta

Este proyecto y todos los que participan en él se rigen por el
[Código de conducta](caja-de-ritmos/master/CODE_OF_CONDUCT.md).
Al participar, se espera que respete este código de conducta. Por favor reporte un comportamiento inaceptable<>.


## Tengo una pregunta

> If you want to ask a question, we assume that you have read the available [Documentation]().

Before you ask a question, it is best to search for existing [Issues](ergre/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Abre un [Issue](caja-de-ritmos/issues/new).
- Proporcione todo el contexto que puedas sobre lo que está encontrando.
- Proporcione versiones de proyectos y plataformas (nodejs, npm, etc.), según lo que parezca relevante.

Nos ocuparemos del problema lo antes posible.

Depending on how large the project is, you may want to outsource the questioning, e.g. to Stack Overflow or Gitter. You may add additional contact and information possibilities:

- IRC
- Slack
- Gitter
- Stack Overflow tag
- Blog
- FAQ
- Roadmap
- E-Mail List
- Forum

## Quiero contribuir

### Reportando errores

#### Antes de enviar un informe de errores

Un buen informe de errores no debería dejar a otros con la necesidad de perseguirlo para obtener más información. Por lo tanto, le pedimos que investigue cuidadosamente, recopile información y describa el problema en detalle en su informe. Complete los siguientes pasos con anticipación para ayudarnos a corregir cualquier posible error lo más rápido posible.

- Asegúrese de que está utilizando la última versión.
- Determine si su error es realmente un error y no un error de su parte, p. utilizando componentes/versiones de entorno incompatibles (Asegúrese de haber leído la [documentación](). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](ergreissues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of the interpreter, compiler, SDK, runtime environment, package manager, depending on what seems relevant.
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to <>.
<!-- You may add a PGP key to allow the messages to be sent encrypted as well. -->

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Abre un [Issue](caja-de-ritmos/issues/new). (Dado que en este momento no podemos estar seguros de si se trata de un error o no, le pedimos que no hable sobre un error todavía y que no etiquete el problema..)
- Explique el comportamiento que esperaría y el comportamiento real.
- Proporcione todo el contexto posible y describa los *pasos de reproducción* que otra persona puede seguir para recrear el problema por su cuenta. Esto generalmente incluye su código. Para obtener buenos informes de errores, debe aislar el problema y crear un caso de prueba reducido.
- Proporcione la información que recopiló en la sección anterior.

Once it's filed:

- El equipo del proyecto etiquetará el problema respectivamente.
- Un miembro del equipo intentará reproducir el problema con los pasos proporcionados. Si no hay pasos de reproducción o una forma obvia de reproducir el problema, el equipo le pedirá esos pasos y marcará el problema como "necesita reproducción". Los errores con la etiqueta `needs-repro` no se abordarán hasta que se reproduzcan.
- Si el equipo puede reproducir el problema, se marcará como `necesita una solución`, así como posiblemente con otras etiquetas (como `crítico`), y se dejará que el problema se resuelva. [implementado por alguien](#tu-primera-contribución-de-código).


### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for ergre, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation]() carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](ergre/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](ergre/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux. <!-- this should only be included if the project has a GUI -->
- **Explain why this enhancement would be useful** to most ergre users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

### Tu primera contribución de código
<!-- TODO
incluye la configuración del entorno, IDE y las típicas instrucciones para empezar
-->

### Mejorando la documentación
<!-- 
Actualizando, mejorando y corrigiendo la documentación
-->

## Guías de estilo
### Mensajes commit
<!-- 
Actualizando, mejorando y corrigiendo la documentación
-->


## Join The Project Team
- Hernando Abella



## Atribución
[Hernando Abella](https://github.com/hernandoabella/caja-de-ritmos)!
