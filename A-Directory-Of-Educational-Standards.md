---
title: EdMatrix, A Directory of Educational Standards
author: Brandt Redd
date: 2019-09-04
layout: article
---
The [EdMatrix chart and table](https://www.edmatrix.org/matrix.html) categorize education standards on two dimensions. Determining where standards are located on these dimensions helps understand which standards address the same needs and which are more complementary to each other. The vertical dimension of the matrix chart is "A Taxonomy of Educational Standards" that distinguishes between the *domains* or types of things each standard addresses. The horizontal dimension is "A Four-Layer Framework for Data Standards" data layers are addressed by each standard.

## A Taxonomy of Educational Standards

<img style="float: right; margin: 1em;" src="Taxonomy.png" alt="A hierarchy of educational standards matching the descriptions in the text." width="450" />
There are three broad categories of standards that are involved educational efforts: Data Standards, Competency & Achievement Standards, and Design & Practice Standards.

**Data Standards** define the data elements and structures used to store and exchange educational information. For education, the three major domains of data standards are Organizational Data, Pedagogical Data and Foundational Standards. These three domains are further divided into seven categories which are described later in this document.

**Competency & Achievement Standards** describe "what [a] learner will know or be able to do." (Adapted from [CASE](http://www.imsglobal.org/activity/case)). Achievement Standards are competency statements that have been defined and adopted by an organization or a government entity. For example, the U.S. 50 states have each defined achievement standards for grades K through 12. Many of the states have adopted the [Common Core State Standards](http://www.corestandards.org/) for English Language Arts and Mathematics.

Competency frameworks are not necessarily adopted as standards and they appear all across academia and industry. In higher education, many universities define the *Learning Objectives* for each course of study. Professional associations like [IEEE](https://www.ieee.org/) and [ASCP](https://www.ascp.org) define the *Competency Standards* associated with their domain. Companies like Microsoft and CISCO define competencies required to be certified on their products.

**Design & Practice Standards** are the newest category in EdMatrix. These standards address human factors associated with learning experiences. For example [W3C WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) standards address the accessibility of websites to those with disabilities. [Universal Design for Learning](http://www.cast.org/our-work/about-udl.html) focuses on known principles for optimizing teaching and learning. [FERPA](www.cast.org/our-work/about-udl.html) and [GDPR](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) address student privacy.

### Data Standards

The two main categories of educational data standards are organizational data and pedagogical data. The matrix also represents foundational standards that form the basis of most others.

**Organizational Data** standards focus on the students, educators and institutions involved in the educational process. This is where you find definitions for the records we keep about students, which learning experiences they have had, from which teachers, and at which schools.

**Pedagogical Data** standards focus on representing and transmitting learning resources. A competency data model like [CASE](http://www.imsglobal.org/activity/case) is a data standard for representing *Competency & Achievement Standards* and other competency frameworks. The standards work together in this case. For example, [Next Generation Science Standards](https://www.nextgenscience.org/) are a set of achievement standards defined by a consortium of U.S. states. They can be represented and transmitted in [CASE](http://www.imsglobal.org/activity/case) format — a competency data model standard.

**Content Metadata** standards indicate how to describe educational content and learning resources. For example [LOM](https://standards.ieee.org/standard/1484_12_1-2002.html) and [LRMI](https://www.dublincore.org/specifications/lrmi/) define terms for name, author, educational level, and alignment to Competency and Achievement standards.

**Content Packaging & Integration** standards indicate how to prepare and package digital learning resources to be loaded into learning platforms. Two standards, both from [IMS Global](https://www.imsglobal.org/), offer examples of contrasting approaches. [Common Cartridge](http://www.imsglobal.org/cc/index.html) describes how to package up learning resources, assessments, or whole courses to be transmitted and loaded into a Learning Management System (LMS). Meanwhile [LTI](http://www.imsglobal.org/activity/learning-tools-interoperability) describes how custom learning activities can be incorporated *by reference* into an LMS while they continue to be hosted on the provider's servers.

**Foundational Standards** are basic standards with broad applicability on which other standards are built. [XML](https://www.w3.org/XML/) and [JSON](https://json.org/) are general standards for representing and transmitting data. LOM is based on XML while CASE is based on JSON. [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) and [HTML](https://en.wikipedia.org/wiki/HTML) are the standards for communication and documents for the world-wide-web. [EDI](https://en.wikipedia.org/wiki/Electronic_data_interchange) is an old but still commonly used protocol for transmitting documents between institutions.

## A Four-Layer Framework for Data Standards

<img style="float: right; margin: 1em;" src="FourLayer.png" alt="A hierarchy of educational standards matching the descriptions in the text." width="450" />
There are four layers of work that fit together in a data design effort. Not all layers need to be present in a particular standard, but each layer must be addressed in a functional system.

1. **Data Dictionary:** This is a list of data *elements*; each with a title, definition, and sometimes a format. For example, Title: "Birth Date"; Definition: "Day an individual was born."; Format: "year-month-day".
2. **Logical Data Model:** Defines entities as collections of properties. Each property is an element in the data dictionary. In other words, an element becomes a property when it’s included in an entity. The Logical Data Model also defines relationships between entities. For example, a Student entity might include the properties "name", "birthdate", "gender", "address", etc. The Student entity type would have a many to many relationship with the "Class" entity type.
3. **Serialization:**  This is a concrete format in which entities may be stored or exchanged. Two frameworks for serialization are XML and JSON but custom serializations are also common. There may be (and often are) multiple serializations of the same data model. Synonymous terms include "physical data model", "binary format", "marshaled format", "binding", "storage format", or "encoding".
4. **Protocol:**  The infrastructure over which the Serialized representations of Data Model Entities are accessed and exchanged. A typical protocol contains several sub-layers, hence the term "protocol stack." Typical sub-layers include Messaging Framework (e.g. Publish/Subscribe, Request/Response, Create/Read/Update/Delete, REST, SOAP, Enterprise Service Bus), Transport (e.g. HTTP or FTP) and Network (e.g. TCP/IP).

The task of systems integration becomes easier and less expensive as more layers are standardized. When all four layers are addressed, systems integration should be a matter of proper configuration settings with no custom programming required. On the other hand, standards (or portions thereof) that are limited to the higher levels of the stack have broader applicability. For example, a principal benefit of a standardized Data Dictionary is reducing the risk that data may be interpreted differently by different systems. So, even this first layer yields significant and far-reaching benefits. Because of this, it’s important to clearly delineate between the layers even when a single standard or specification addresses more than one. 

## Synergies

<img style="float: right; margin: 1em;" src="EdStandardsMatrix.png" alt="A hierarchy of educational standards matching the descriptions in the text." width="450" />
I have often said that personalized learning happens at the intersection of student data and content data. That is, when you can match the data we have about the student's achievement against the data we have about the learning materials available to that student. In a broader sense, the benefits of standards are greatly multiplied when complementary standards are used together.

*This is an update to two previous documents, [A Four-Layer Framework for Data Standards](https://www.ofthat.com/2011/09/four-layer-framework-for-data-standards.html) and [A Taxonomy of Education Standards](https://www.ofthat.com/2013/03/a-taxonomy-of-education-standards.html). The two models were combined to produce EdMatrix.*