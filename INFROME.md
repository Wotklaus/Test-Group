# Informe: Sistema de Gestión de Becas (MVP) — Integración OCR en AWS (Escenario B)

1. Portada  
(Título del proyecto, tu nombre: Wotklaus, carrera, unidad académica, nombre del profesor, fecha — completa en Word)

2. Índice  
1. Portada  
2. Índice  
3. Resumen  
4. Introducción  
5. Contextualización del tema  
6. Importancia del proyecto  
7. Delimitación del problema  
8. Planteamiento del problema  
9. Justificación  
10. Preguntas de investigación / Ejes de intervención  
11. Objetivo general  
12. Objetivos específicos  
13. Marco teórico y conceptual  
14. Metodología propuesta  
15. Población y ámbito de aplicación  
16. Procedimientos  
17. Plan de trabajo y cronograma  
18. Estimación de costos (Escenario B: Amazon Textract)  
19. Resultados esperados  
20. Impacto previsto y aportes  
21. Conclusiones  
22. Referencias  
23. Anexos

3. Resumen (150–250 palabras)  
La gestión de becas en la universidad presenta actualmente un proceso mayoritariamente manual que provoca demoras prolongadas, errores en la captura de datos y riesgos de fraude documental. Este proyecto propone el desarrollo e implementación de un sistema digital integrado para la gestión de becas que automatice la importación de datos desde el sistema institucional, valide certificados bancarios mediante Amazon Textract (OCR), genere contratos automáticamente y gestione el flujo de aprobación. El objetivo es reducir sustancialmente los tiempos del proceso (de aproximadamente ocho meses en el modelo actual a un objetivo realista de dos meses), disminuir la tasa de errores en datos críticos y mejorar la trazabilidad administrativa. El prototipo se construirá como un MVP desplegable en AWS con enfoque serverless y procesamiento asíncrono para manejar picos de alta concurrencia; incluirá pruebas de carga reales (Locust/JMeter) y un piloto controlado con usuarios reales. El resultado será una herramienta donada a la Unidad de Becas, acompañada de documentación técnica y procedimientos operativos, que servirá además como caso de estudio para una tesis de grado.

4. Introducción  
La asignación y gestión de becas constituye una función estratégica en las instituciones de educación superior, ya que impacta directamente la permanencia académica y el acceso equitativo a la educación. En la universidad objeto de estudio, la Unidad de Becas administra el beneficio a nivel institucional y atiende, por convocatoria, alrededor de 4 000 beneficiarios. El proceso actual presenta demoras que pueden extenderse hasta ocho meses debido a procedimientos semimanuales basados en hojas de cálculo con macros, recepciones físicas y validaciones manuales. El presente informe propone una solución técnica y metodológica para automatizar las etapas críticas del flujo de becas, optimizar tiempos, mejorar la seguridad de la información y garantizar trazabilidad administrativa.

5. Contextualización del tema  
Actualmente la Unidad de Becas trabaja con listados/matrices que se actualizan mediante formularios y exportaciones a hojas de cálculo. La generación de contratos se apoya en macros de Excel; los documentos se envían o se depositan físicamente en correspondencia y los certificados bancarios se reciben en formato físico o escaneado. Al procesar físicamente los documentos se detectan inconsistencias que obligan a retrabajos y verificaciones manuales. La universidad ha facilitado créditos académicos en AWS (30 cuentas x $50 USD = $1,500 USD totales) para desarrollo y pruebas; estos créditos son limitados y requieren un uso eficiente de recursos. La Unidad de Becas apoyará el desarrollo con acceso y muestras de datos bajo acuerdos de confidencialidad.

6. Importancia del proyecto  
Digitalizar y automatizar el proceso de gestión de becas mejora la eficiencia operativa, reduce errores en datos críticos (cuentas bancarias, cédulas), aumenta la trazabilidad para auditorías y acelera el acceso al beneficio para estudiantes vulnerables. Desde la perspectiva académica, el proyecto constituye un caso aplicado de investigación en ingeniería de software distribuida y administración pública digital.

7. Delimitación del problema  
El proyecto se limita a la digitalización y automatización de: (a) importación de datos desde el SIS mediante exportaciones CSV; (b) carga y validación automática de certificados bancarios mediante OCR (Amazon Textract, Escenario B); (c) generación automatizada de contratos en PDF y registro transaccional en base de datos; (d) panel administrativo para revisión y gestión. Se excluye por ahora: almacenamiento en blockchain (queda para fases posteriores), integración bancaria de pagos finales en tiempo real, y la emisión masiva de firmas electrónicas (si bien se documenta el flujo con firma electrónica y un fallback con firma física/escaneada).

8. Planteamiento del problema  
El proceso actual presenta: entrada manual y duplicada de datos, generación de contratos mediante macros que facilita inconsistencias, verificación física que permite documentos alterados y ausencia de trazabilidad digital. Estas fallas generan retrasos de hasta ocho meses, incrementan la carga administrativa y expone a la institución a riesgos de fraude y reputacionales.

9. Justificación  
La propuesta resuelve la necesidad institucional de mejorar tiempos, reducir errores y garantizar trazabilidad. Además, la entrega de un MVP donado contribuye a la modernización institucional y ofrece evidencia empírica que puede usarse como base para una tesis de grado.

10. Preguntas de investigación / Ejes de intervención  
10.1. ¿En qué medida la automatización del flujo de generación y validación de contratos reduce el tiempo total desde la notificación hasta “contrato firmado”?  
10.2. ¿Cuál es la eficacia del uso de Amazon Textract para la validación automática de certificados bancarios en la reducción de errores y fraudes documentales?  
10.3. ¿Qué configuración arquitectónica en AWS (serverless vs contenedores/EC2) ofrece la mejor relación costo‑eficacia para sostener picos de carga durante la ventana de generación de contratos?

11. Objetivo general  
Desarrollar e implementar un sistema automatizado, desplegable y documentado para la gestión de contratos de beca a nivel institucional que integre validación automática de certificados bancarios y permita reducir tiempos de gestión, disminuir errores y facilitar trazabilidad administrativa.

12. Objetivos específicos  
12.1 Diseñar la arquitectura técnica del sistema, priorizando escalabilidad y eficiencia de costes en AWS, y definir ambientes dev/qa/prod.  
12.2 Implementar un MVP funcional que permita la importación de datos desde el SIS (export CSV), la carga y validación OCR de certificados bancarios (Textract), la generación automática de contratos en PDF y el registro transaccional del proceso.  
12.3 Ejecutar pruebas de carga reales que simulen la ventana de alta concurrencia y ajustar el sistema para cumplir los objetivos de disponibilidad y latencia.  
12.4 Realizar un piloto con usuarios reales (20–50 usuarios) y recopilar métricas para evaluar reducción de tiempo medio por trámite y tasa de errores en los datos bancarios.  
12.5 Entregar la solución (código, documentación de despliegue y manual operativo) a la Unidad de Becas como donación.

13. Marco teórico y conceptual  
13.1 Gestión de trámites administrativos y modernización digital: e‑government y procesos administrativos en educación superior (Heeks, 2006; Gil‑García & Pardo, 2005).  
13.2 Computación en nube y patrones serverless: ventajas de escalado elástico para picos de carga; uso de colas asíncronas para desacoplar tareas de larga duración (Marinescu, 2017; Jonas et al., 2019).  
13.3 OCR y validación documental: precisión y limitaciones de OCR, impacto de formatos estandarizados y calidad de escaneos (Smith, 2007; Amazon Web Services, 2021).  
13.4 Seguridad y protección de datos: normativa y mejores prácticas para PII (GDPR y normativa local), cifrado en tránsito y en reposo, control de accesos, acuerdos de confidencialidad.

14. Metodología propuesta  
14.1 Enfoque: investigación aplicada con desarrollo de prototipo (MVP) y evaluación empírica (pruebas técnicas + pilotaje).  
14.2 Técnicas e instrumentos: importador CSV del SIS; desarrollo ágil en sprints; control de versiones (GitHub); CI/CD (GitHub Actions / CodePipeline); Infraestructura como Código (Terraform); pruebas de carga (Locust/JMeter); Amazon Textract para OCR; generación de PDF (biblioteca servidor-side); almacenamiento S3 y RDS Postgres para metadatos.  
14.3 Métricas y KPIs: tiempo medio desde notificación hasta contrato finalizado (objetivo ≤ 2 meses), tasa de error en datos bancarios (< 2 %), tasa de éxito de jobs de procesamiento (> 98 %), disponibilidad durante ventana (≥ 99 %), coste por documento procesado.  
14.4 Pruebas: unitarias, integración, pruebas de carga reales simulando la ventana concentrada y pilotaje controlado con 20–50 usuarios.

15. Población y ámbito de aplicación  
Alcance institucional: Unidad de Becas de la universidad; beneficiarios por convocatoria estimados en 4 000 estudiantes. Pilotaje inicial con 20–50 usuarios.

16. Procedimientos  
16.1 Recolección: la Unidad de Becas entregará ejemplares de plantilla de contrato, 1–3 certificados bancarios anonimizados y un CSV de ejemplo del SIS.  
16.2 Diseño: modelado de datos, especificación de API y arquitectura (S3, API Gateway, Cognito, Lambda/ECS, SQS, Textract, RDS).  
16.3 Implementación MVP: subida de certificado por URL pre‑firmada a S3 → crear registro PENDING en RDS → encolar job en SQS → worker (Lambda/ECS) invoca Textract, valida campos vs CSV importado del SIS, genera PDF final y sube a S3 → actualizar estado en RDS → notificación SES.  
16.4 Pruebas y ajustes: ejecución de pruebas de carga reales; ajustes de escalado y parámetros de throttling; medición de KPIs.  
16.5 Pilotaje y entrega: pilotaje controlado, recopilación de métricas y entrega de repositorio y manual operativo.

17. Plan de trabajo y cronograma (fechas)  
- 16 Nov 2025: Presentación del tema.  
- 17–23 Nov 2025: Feedback y recolección de artefactos.  
- 24 Nov – 7 Dic 2025: Diseño detallado y primer borrador del informe.  
- 8 Dic – 28 Dic 2025: Implementación inicial del MVP (importador CSV, subida S3, pipeline encolado).  
- 29 Dic 2025 – 11 Ene 2026: Desarrollo worker OCR y generación PDF; integración RDS y notificaciones.  
- 12 Ene – 25 Ene 2026: Pruebas de carga reales (Locust/JMeter) y ajustes.  
- 26 Ene – 8 Feb 2026: Pilotaje con 20–50 usuarios, recolección de métricas y correcciones.  
- 9 Feb – 15 Feb 2026: Documentación final, preparación de entrega y ensayo de presentación.  
- 15 Feb 2026: Entrega final.

18. Estimación de costos (Escenario B — Amazon Textract + Serverless)  
18.1 Supuestos y fuentes de precios (USD)  
- Volumen objetivo: 4 000 documentos (certificados + contratos) por convocatoria.  
- Tamaño promedio de almacenamiento por documento (PDF final + certificado): 0.5 MB → total almacenamiento ≈ 2 GB.  
- Ventana de procesamiento: concentrada en 2–3 semanas.  
- Créditos académicos disponibles: 30 cuentas x $50 = $1,500 USD (saldo inicial).  
- Precios usados (fuentes oficiales/consulta pública, noviembre 2025):  
  - Amazon Textract — AnalyzeDocument: $0.015 USD por página (AWS Textract Pricing).  
  - Amazon S3 Standard: $0.03 USD por GB‑mes; PUT $0.005 por 1,000; GET $0.0004 por 1,000.  
  - AWS Lambda: $0.20 por 1M solicitudes; $0.0000166667 por GB‑segundo (x86) (coste por ejecución calculado según memoria+duración).  
  - Amazon API Gateway (HTTP API): $1.00 por millón de llamadas (primeros 300M).  
  - Amazon RDS (Postgres): db.t3.micro ≈ $14.50 / mes; db.t3.small ≈ $26.28 / mes (on‑demand).  
  - Amazon SQS: $0.40 por 1M solicitudes (colas estándar).  
  - Amazon SES: $0.10 por 1,000 emails ($0.0001 por email).  
  - Amazon CloudFront (transfer): $0.085 por GB (primeros 10 TB).  
(Fuentes: páginas oficiales AWS y guías de precios consultadas en línea).

18.2 Fórmulas y componentes de costo  
- Costo_total ≈ Costo_infra_base (prorrateado al periodo) + (#docs × costo_por_doc) + Costo_pruebas  
- Costo_por_doc ≈ costo_Textract + costo_compute + costo_storage_db + costo_notif + costo_queue_api  
Donde:  
- costo_Textract = $0.015 por documento (assume 1 página de certificado procesada con AnalyzeDocument).  
- costo_compute = estimación conservadora de $0.02 por documento (invocaciones Lambda/ECS para coordinación, generación PDF y lógica; incluye costo por ejecución y memoria).  
- costo_storage_db = $0.007 por documento (incluye almacenamiento S3 prorrateado + operaciones PUT/GET + uso RDS por registro).  
- costo_notif (SES) = $0.0001 por email.  
- costo_queue_api ≈ negligente (SQS + API Gateway) por documento, pero consideramos $0.0005 por doc para cubrir llamadas y colas.

18.3 Cálculo detallado por documento  
- costo_Textract = $0.0150  
- costo_compute (Lambda/ECS) = $0.0200  
- costo_storage_db = $0.0070  
- costo_notif = $0.0001  
- costo_queue_api = $0.0005  
- costo_por_doc ≈ $0.0426

18.4 Cálculo total para 4 000 documentos  
- Costo_variable = 4 000 × $0.0426 = $170.40  
- Costo_infra_base (estimado, prorrateado para 2 meses de trabajo/desarrollo y pruebas):  
  - RDS (db.t3.micro) 2 meses ≈ $29.00  
  - S3/CloudFront + logs + CloudWatch prorrateado ≈ $50–100  
  - API Gateway / Lambda overhead prorrateado ≈ $80–120  
  - Coste entorno QA/Pruebas y snapshots ≈ $50–100  
  - Tomando valor central: Costo_infra_base ≈ $300 (2 meses)  
- Costo_pruebas (instancias temporales para pruebas de carga y uso de recursos adicionales): estimado $50–100 (dependiendo intensidad) → tomamos $100.  
- Total estimado (Escenario B) ≈ Costo_variable $170.40 + Infra_base $300 + Pruebas $100 = $570.40 (aprox.)

18.5 Interpretación y comparación con créditos disponibles  
- Créditos académicos disponibles: $1,500 USD.  
- Total estimado Escenario B (4 000 documentos) ≈ $570 USD → significativamente inferior a los $1,500 USD disponibles, por lo que el proyecto y las pruebas pueden financiarse con los créditos actuales dejando margen para pruebas adicionales.  
- Nota crítica: si se incluye firma electrónica pagada (ej. $2.00 por firma), el costo total se incrementa en $8,000 USD (4 000 × $2), lo que supera ampliamente los créditos y requiere negociación institucional.

18.6 Sensibilidad y riesgos de costos  
- El mayor riesgo en costos es el uso de servicios de terceros pagos por documento (firma electrónica) y cambios en el volumen de documentos.  
- Textract escala por página; si los certificados tienen varias páginas o se procesa también el PDF del contrato con AnalyzeDocument, el costo por documento aumentará proporcionalmente.  
- Recomendación: en fase de MVP usar Textract para el pilotaje (200–500 documentos) y simular/filtrar el resto o usar OCR self-hosted temporalmente para limitar gasto hasta confirmar aprobación institucional para producción con Textract.

18.7 Recomendaciones operativas para ahorrar costos  
- Ejecutar pruebas de carga y procesamiento en entornos temporales y destruir recursos cuando no se necesiten.  
- Limitar el uso de provisioned concurrency en Lambda (solo si es estrictamente necesario).  
- Utilizar almacenamiento S3 y políticas de ciclo de vida para mover archivos antiguos a clases de menor costo si no se requieren en producción.  
- Negociar la compra agrupada de firmas electrónicas o postergar firma pagada a segunda fase.  
- Monitorear el gasto con AWS Budgets y alertas para evitar consumos inesperados.

19. Resultados esperados  
19.1 Reducción del tiempo total del proceso a un objetivo de ≤ 2 meses.  
19.2 Reducción de la tasa de errores en datos bancarios a < 2 % mediante validación automática con OCR y conciliación contra SIS.  
19.3 Sistema con disponibilidad objetivo ≥ 99 % en la ventana de alta concurrencia (validado con pruebas de carga).  
19.4 Entrega de MVP donable y documentado a la Unidad de Becas.

20. Impacto previsto y aportes al campo profesional o académico  
20.1 Profesional: mayor eficiencia operativa, reducción de costos administrativos, mejor trazabilidad y disminución del riesgo reputacional.  
20.2 Académico: caso de estudio sobre uso de arquitecturas cloud y OCR en trámites universitarios; evidencia empírica para tesis.

21. Conclusiones  
La solución propuesta (MVP en AWS con Amazon Textract para OCR) es técnicamente viable y económicamente compatible con los créditos disponibles ($1,500 USD). La estrategia de desacoplar procesamiento con colas y workers permite manejar picos de carga y limitar costos. La inclusión de la firma electrónica implica un coste muy significativo y debe planearse como fase posterior o bien negociarse institucionalmente.

22. Referencias (APA 7)  
Heeks, R. (2006). Implementing and Managing e‑Government: An International Text. SAGE Publications.  
Gil‑García, R. J., & Pardo, T. A. (2005). E‑government success factors: Moving from theory to practice. Government Information Quarterly, 22(2), 187–200.  
Janssen, M., Charalabidis, Y., & Zuiderwijk, A. (2012). Benefits, adoption barriers and myths of open data. Information Systems Management, 29(4), 258–268.  
Marinescu, D. C. (2017). Cloud Computing: Theory and Practice (2nd ed.). Morgan Kaufmann.  
Jonas, E., Schleier‑Smith, J., Sreekanti, V., Tsai, C.‑C., Khandelwal, A., Shah, M., ... & Stoica, I. (2019). Cloud programming simplified: A survey of serverless computing. Communications of the ACM, 63(8), 59–69.  
Smith, R. (2007). An overview of the Tesseract OCR engine. In Proceedings of the Ninth International Conference on Document Analysis and Recognition (ICDAR).  
Amazon Web Services. (2021). Amazon Textract Developer Guide. Recuperado de https://docs.aws.amazon.com/textract/latest/dg/what-is.html  
Lacity, M., & Willcocks, L. (2016). Robotic process automation and cognitive automation: The next phase. The Outsourcing Unit Working Research Paper Series, 16/02.  
European Union. (2016). Regulation (EU) 2016/679 — General Data Protection Regulation (GDPR). Official Journal of the European Union.  
Pardo, T. A., & Burke, G. B. (2009). Digital government: Principles and best practices. Government Information Quarterly, 26(2), 136–143.

23. Anexos (a insertar)  
Anexo A: Plantilla institucional de contrato (archivo Word/PDF) [INSERTAR].  
Anexo B: Ejemplo de export CSV del SIS (archivo CSV o esquema de columnas) [INSERTAR].  
Anexo C: Muestras anonimizadas de certificados bancarios en PDF (1–3 archivos) [INSERTAR].  
Anexo D: Diagrama de arquitectura (PNG) — alto nivel: CloudFront → S3 → API Gateway → Cognito → SQS → Workers (Lambda/ECS) → Amazon Textract → RDS → Panel Admin. [INSERTAR].  
Anexo E: Script/plan para pruebas de carga (Locust/JMeter) [INSERTAR].

Fin del documento.