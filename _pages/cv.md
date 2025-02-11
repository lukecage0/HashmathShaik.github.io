---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---
<!-- See the PDF version [here](/files/CVJorgeAMendez.pdf). -->

{% include base_path %}

Academic Appointments
=====  
* **2024-Present: Ph.D. Student**  
  * Electrical and Computer Engineering, Stony Brook University  
  * Research Focus: Neuro-Symbolic AI, Deep Learning, Reinforcement Learning  

* **2023-Present: Graduate Research Assistant**  
  * Stony Brook University  
  * Topics: Multi-modal NLP, Explainable AI (XAI), Reinforcement Learning for multi-agent collaboration  
  * Supervisor: [Alex Doboli](http://www.ece.stonybrook.edu/~adoboli/)  

* **2023-2024: Graduate Research Assistant**  
  * Problem-Oriented Medical Research Lab, Lakehead University  
  * Topics: AI-driven clinical decision support, Large Language Models (LLMs), Medical NLP  
  * Supervisor: [Sabah Mohammed](https://www.lakeheadu.ca/users/M/mohammed)  


Education
======  
* **Ph.D. in Computer Engineering**, Stony Brook University (Expected 2028)  
  * GPA: **3.80/4.00**  
  * Coursework: Deep Learning, Computer Vision, Digital Image Processing
  
* **M.Sc. in Computer Science**, Lakehead University, Canada (2024)  
  * GPA: **4.00/4.00**  
  * Coursework: NLP, Distributed Systems, Optimization Methods  

* **B.Sc. in Information Technology**, JNTUK, India (2021)  
  * First Class with Distinction  
  * Coursework: Data Structures, DBMS, Operating Systems  

Industry Experience
======
* **2023-2024: Full Stack Developer**  
  * Aurora Constellations, Ontario, Canada  
  * Topics: LLM-based Healthcare Analytics, AI-driven Decision Support Systems  

* **2021-2022: Machine Learning Engineer**  
  * Tata Consultancy Services (Client: Deutsche Bank)  
  * Topics: NLP-SQL Search Analytics, AI for Financial Data Processing
  

Publications
======

Preprints
-----
  <ul>{% for post in site.publications reversed %}
    {% if post.type == 'preprint' %}
      {% include archive-single-publication-cv.html %}
    {% endif %}
  {% endfor %}</ul>

<!-- Journal Articles
-----
  <ul>{% for post in site.publications reversed %}
    {% if post.type == 'journal' %}
      {% include archive-single-publication-cv.html %}
    {% endif %}
  {% endfor %}</ul> -->


Conference Papers
-----
  <ul>{% for post in site.publications reversed %}
    {% if post.type == 'conference' %}
      {% include archive-single-publication-cv.html %}
    {% endif %}
  {% endfor %}</ul>

<!-- Workshop Papers
-----
  <ul>{% for post in site.publications reversed %}
    {% if post.type == 'workshop' %}
      {% include archive-single-publication-cv.html %}
    {% endif %}
  {% endfor %}</ul> -->

<!-- Theses
-----
  <ul>{% for post in site.publications reversed %}
    {% if post.type == 'thesis' %}
      {% include archive-single-publication-cv.html %}
    {% endif %}
  {% endfor %}</ul> -->


Teaching
======

Stony Brook University
------
  <ul>{% for post in site.teaching reversed %}
    {% if post.venue == "Stony Brook University" %}
      {% include archive-single-teaching-cv.html %}
    {% endif %}
  {% endfor %}</ul>
  
Lakehead University
------
  <ul>{% for post in site.teaching reversed %}
    {% if post.venue == "Lakehead University" %}
      {% include archive-single-teaching-cv.html %}
    {% endif %}
  {% endfor %}</ul>



Invited Talks
======

  <ul>{% for post in site.talks  reversed %}
    {% include archive-single-talk-cv.html %}
  {% endfor %}</ul>

<!-- Service
======

Journal Article Reviewing
----
* IJRR, International Journal of Robotics Research (2023) -->

<!-- Conference Paper Reviewing
----
* NeurIPS Datasets and Benchmarks Track (2023)
* ICLR, International Conference on Learning Representations (2021<sup>\*</sup>, 2022<sup>\*</sup>)
* ICML, International Conference on Machine Learning (2021<sup>\*</sup>)
* NeurIPS, Conference on Neural Information Processing Systems (2020, 2021<sup>\*</sup>, 2022)
* ICRA / RA-L, International Conference on Robotics and Automation (2020, 2021, 2023)
* Conference paper co-reviewer:
  * IJCAI, International Joint Conference on Artificial Intelligence (2017, 2018, 2019)
  * ICML, International Conference on Machine Learning (2018)
  * NeurIPS, Neural Information Processing Systems (2018)
  * AAAI, Conference on Artificial Intelligence (2019)

<sup>\*</sup>Outstanding reviewer -->

<!-- Workshop Proposal Reviewing
----
* AAAI, Conference on Artificial Intelligence (2021) -->

<!-- Workshop Paper Reviewing
----
* InterNLP Workshop at NeurIPS (2022) -->