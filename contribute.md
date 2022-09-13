---
title: Contributing Updates
date: 2019-08-01
---
# Contributing Updates to EdMatrix

EdMatrix would not be possible without the generous contributions from many people. We encourage individuals and organizations involved in education standards work to submit updates and corrections.

## Step 1: Access the source code

Source to the site is [on GitHub here](https://github.com/EdMatrix/edmatrix.github.io). Files describing the standards are in the [_stds](https://github.com/EdMatrix/edmatrix.github.io/tree/master/_stds) subdirectory.

Download the *raw* form of a file for a standard you intend to update. If contributing a new standard, download [Template.md](https://raw.githubusercontent.com/EdMatrix/edmatrix.github.io/master/_stds/Template.md).

## Step 2: Write or update the standard description

Standard descriptions are in [MarkDown](https://guides.github.com/features/mastering-markdown/) format. The majority of the information is in the [YAML front matter](https://jekyllrb.com/docs/front-matter/) which begins and ends with lines consisting of three dashes. Following the front matter is a description that uses markdown formatting.

Here's an example:

    ---
    title: Soliloquy Markup  
    stdurl: http://Soliloquy.example/markup
    stdtype: Tech
    org: Soliloquy Standards Initiative
    types: "Content Metadata,Content"
    datalayers: "1,2,3"
    uses: "HTML,EDI"
    context: "Primary,Secondary"
    provenance: Hermione Granger
    ---
    **Soliloquy Markup** is a publishing and distribution format for digital lessons.
    
    Soliloquy and the associated standard are fictional, invented just for this sample.

### title
The title should be the concise name by which the standard is known. Acronyms are common.

### stdurl
This should be the URL of a page that gives an overview of the standard, its purpose, use, and governance. The page should exist on the standard organization's website. Generally you pick the best page for an overview which has links to the standard specification itself.

### `Tech` for a technical standard such as a data model. `Practice` for a practice standard such as how to apply certain data models to learning information.

### org
The name of the organization that governs the standard.

### types
The type or types of data or information that are covered by the standard. Please consult [A Taxonomy of Education Standards](http://www.edmatrix.org/taxonomyofstandards.pdf) for descriptions of the types.

*As of 13 September 2019 the taxonomy document referenced above is out of date and doesn't fully match the types listed below. Please reference the template, other standards, and the [EdMatrix diagram](/matrix.html) as you choose your types. The taxonomy will be updated shortly.*

Select one or more from the following list of data categories. If more than one type is covered by the standard, the type names should be separated by commas. Regardless, the list should be enclosed in quotes. For example: `"Student Data, Educator Data"`

* Organizational
* Personal
* Event
* Achievement
* Credential
* Competency
* Content Metadata
* Content

### datalayers
The data layers are from [A Four Layer Framework for Data Standards]List the just the numbers of the layers separated by commas. The whole list should be enclosed in quotes. Examples: `"1,2"` or `"4"`

### uses
Other standards that are used or referenced by this standard, usually identified by an acronym. Most of the time they are fundamental standards that aren't necessarily learning related. Common choices are: `JSON`, `XML`, `REST`, `HTTP`, etc. This is an open vocabulary so no need to be restricted to such a list.

### context
Areas of intended use for the standard. May be education levels like "K-12", "PK", "Grade 4", "Primary", etc. May be regions like "Europe", "UK", or "Midwest USA". May be a combo like "UK Tertiary". This is an open vocabulary so you can add values that haven't been used before. While this is an area of intended use, many standards get used outside their original context.

### provenance
This field is **optional**. It indicates the origin or author of the *description* (not of the standard itself). Typically it is a reference to a person, group, or organization. The information will *not* appear on the website but will be retained in the source code for reference by people making future changes.

### Description (body)
Following the front matter, the body of the document should contain a description of standard. The first paragraph will show in the standards table. The balance of the body (if any) will only appear in the detail page - accessed by clicking **(more)** in the table. Use Markdown syntax to incorporate rich text features including links.

The full name of the standard (often an expansion of the acronym) should appear in **bold** within the first sentence of the description.

## Step 3: Submit your update or addition.

There are three ways to submit your update. If you are familiar with Git and with [GitHub](https://github.com/) (or are willing to learn) then use the Fork & Pull Request method. Otherwise, you can create an issue and attach your update. Both of these methods require that you create a [free Github account](https://github.com/join).

### Fork & Pull Request Method

The Fork & Pull approach is the standard way to submit an update to any GitHub project. First, you [create a personal fork](https://help.github.com/en/articles/about-forks) of the project. This is a copy of the project in which you can make any changes and try them out. Then you [submit a pull request](https://help.github.com/en/articles/about-pull-requests) recommending that the coordinator of the project incorporate your changes into the primary copy. The GitHub pull request mechanism initiates an online discussion where you can describe your update and the coordinator can ask questions.

### Create an Issue Method

Browse to the [EdMatrix Issues Page](https://github.com/edmatrix/edmatrix.github.io/issues) on Github. Create an issue, tag it as "enhancement" and attach your new or edited markdown file from step 2.

&nbsp;

Thank you for your interest in EdMatrix. And thanks in advance for your contributions to making it a valuable resource for everyone working in education technology.

