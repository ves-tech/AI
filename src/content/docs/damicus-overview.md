---
title: "Da-M-I-C-Us Overview"
sourcedFrom: "https://docs.google.com/document/d/1UgIfWKZOpVCDFoNGQE-uYR9_gIEDzRESEkAuGw0gh0k/edit"
lastSynced: "2026-09-02T16:07:02.597Z"
---
**<span style="color:#1a36b4"><strong>DRAFT2 (WIP)</strong></span>**

# <span style="color:#335cff">Da-M-I-C-Us</span>

<span style="color:#6b6456">A classification framework for AI solutions</span>

<span style="color:#1b2a9e"><em>Version 1.0 Draft 2· June 2026</em></span>

<span style="color:#1d1d1d">Da-M-I-C-Us classifies AI solutions along five dimensions: Data, Model, Infrastructure, Code and Use, &nbsp;so that an organisation can describe any AI capability precisely and state which classes it permits for its own operations, its partners and its vendors. The framework separates what a solution intrinsically is from how a given organisation deploys it and provides a catalogue of common classification classes and common policy classes covering the everyday adoption scenarios.</span>

<span style="color:#6b6456"><em>Visual Effects Society · Technology Committee<br>Michele Sciolette, …</em></span>

* * *

## <span style="color:#1a36b4">1 &nbsp; Motivation</span>

<span style="color:#1b2a9e"><em>The lack of a suitable classification of AI solutions is a barrier to responsible adoption in a corporate environment.</em></span>

<span style="color:#2b2b2b">The term “AI” is regularly used to reference an incredibly broad range of solutions: from narrow AI tools developed in-house</span><span style="color:#1d1d1d">, trained exclusively on corporate internal data and running on infrastructure the organisation controls, to large generative models trained on web-scale datasets and consumed as multi-tenant cloud services. Policies written at the level of “AI”, “Gen AI” or “machine learning” cannot distinguish between these, so they either over-block or under-protect.</span>

<span style="color:#1d1d1d">Blanket contractual clauses such as “no AI use is permitted on this project”, and reporting requirements such as “declare any use of AI”, are no longer meaningful: AI capabilities are now embedded inside everyday tools, often without the end user's awareness. What organisations need to express is which classes of AI capability are acceptable, and for which purposes.</span>

<span style="color:#1d1d1d">Da-M-I-C-Us has two objectives:</span>

•    **Classify** <span style="color:#1d1d1d">AI solutions based on key criteria that are relevant to adoption in a corporate context using compact, unambiguous codes</span>

•    <span style="color:#2b2b2b">Allows organisations to </span> <span style="color:#2b2b2b"><strong>define policies</strong></span> <span style="color:#2b2b2b">&nbsp;outlining which classes of AI solutions are acceptable for their internal operations, partners and collaborators</span>

## <span style="color:#1a36b4">2 &nbsp; Inspiration</span>

<span style="color:#1d1d1d">This work is loosely inspired by the Creative Commons’ CC licenses. Their copyright licenses not only identify all the key criteria that are important for copyright holders and end users, but also associate them with clear definitions and codes, making them easy to understand and remember. These basic elements are combined to identify well defined copyright license types.</span>

<table><tbody><tr><td colspan="1" rowspan="1"><h1 id="h.hojsuvmh3t83"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 188.00px; height: 177.33px;"><img alt="" src="/AI/doc-images/damicus/16532d9014.jpg" style="width: 188.00px; height: 177.33px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></h1></td><td colspan="1" rowspan="1"><p><span style="color:#1d1d1d"><br>BY: credit must be given to the creator</span></p><p><span style="color:#1d1d1d">SA: Adaptations must be shared under the same terms</span></p><p><span style="color:#1d1d1d">NC: Only noncommercial uses of the work are permitted</span></p><p><span style="color:#1d1d1d">ND: No derivatives or adaptations of the work are permitted</span></p></td></tr></tbody></table>

## <span style="color:#1a36b4"><br><br>3 &nbsp; The framework at a glance</span>

The core idea of **Da-M-I-C-Us** <span style="color:#1d1d1d">&nbsp;is that classifying an AI solution requires us to identify where it is positioned in the broad space of all AI solutions, referencing the criteria that are relevant to adoption within an organisation. To achieve this, we:</span>

*   <span style="color:#1d1d1d">define a set of key criteria, or dimensions, that should be considered when assessing an AI solution</span>
*   <span style="color:#1d1d1d">for each dimension, define a set of clear options, or positions, identified by simple, easy-to-remember codes.</span>

<span style="color:#1d1d1d">Combining these two elements, each solution is classified by stating its position for each dimension and each policy is defined by stating which positions are permitted for each dimension.</span>

<span style="color:#1d1d1d">Modern products often bundle many AI capabilities. In that case, the classification should be applied to each individual capability and potentially be combined to classify more complex solutions.</span>

**Da-M-I-C-Us** defines five dimensions, **Da**ta, **M**odel, **I**nfrastructure, **C**ode and **Us**<span style="color:#1d1d1d">e. For each dimension it defines a small set of options, identified by a unique two letters code.</span>

**Intrinsic dimensions and the deployment dimension**<span style="color:#1d1d1d"><br>The five dimensions are not all of the same kind. Data, Model and Code, and usually Infrastructure, are intrinsic: they are fixed by how a solution is built and distributed, so a vendor or analyst can state them without knowing who will use the tool and how. Use is different in kind: it is a deployment property that records how a particular organisation applies the solution rather than anything inherent to it. Infrastructure can fall on either side: certain solutions are only available via one infrastructure model, while others, mostly when the weights are portable, can be deployed using different infrastructure models. The dividing line is whether a dimension can be stated from the solution alone (Data, Model, Code, and usually Infrastructure) or only once its use is known (Use, and sometimes Infrastructure).</span>

**Classifications and Policies**<span style="color:#1d1d1d"><br>With this in mind, the framework supports three types of statements:</span>

*   **Solution Classification**<span style="color:#1d1d1d">: the intrinsic dimensions only (Data, Model, Infrastructure, Code), with Use left unset. It records what a solution is. The vendor of the solution may publish the string of the codes representing the positioning of the solution</span>
*   **Deployment Classification**<span style="color:#1d1d1d">: a solution classification with the Use value added, describing how a specific organisation applies it.</span>
*   **Policy**<span style="color:#1d1d1d">: the set of classifications an organisation permits. Unlike a classification, which fixes one option per dimension, a policy is normative and may list alternatives or use wildcards.</span>

On this foundation the Da-M-I-C-Us framework also defines common classes, given descriptive names so that they can be identified quickly.  A successful adoption of this framework would result in the common classes defined in section 8 <span style="color:#1d1d1d">to become generally well understood and adopted for classifications and policies.</span>

### <span style="color:#1a36b4">3.1 Icon scheme</span>

<span style="color:#1d1d1d">The icons used in the document below are color coded to mean the following:</span>

<table><tbody><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 46.00px; height: 46.00px;"><img alt="" src="/AI/doc-images/damicus/8920676c45.png" style="width: 53.00px; height: 48.85px; margin-left: -4.00px; margin-top: -2.85px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1d1d1d">Cleared or controlled</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 43.00px; height: 45.00px;"><img alt="" src="/AI/doc-images/damicus/0a8765e207.png" style="width: 43.00px; height: 45.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1d1d1d">Terms or restrictions apply</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 43.00px; height: 46.00px;"><img alt="" src="/AI/doc-images/damicus/64804c0a47.png" style="width: 43.00px; height: 46.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1d1d1d">RIghts uncertainty or delivery exposure</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 46.00px; height: 47.00px;"><img alt="" src="/AI/doc-images/damicus/4e20ae8e7d.png" style="width: 56.00px; height: 47.00px; margin-left: -7.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1d1d1d">Wildcard - any value permitted</span></p></td></tr></tbody></table>

## <span style="color:#1a36b4">4 &nbsp; The five core dimensions</span>

<table><tbody><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>Da</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>Data</strong></span></p><p><span style="color:#6b6456">Provenance and rights status of the training data - </span><span style="color:#6b6456"><em>intrinsic</em></span></p></td></tr></tbody></table>

<span style="color:#1d1d1d">The Data dimension captures the rights status of the data used to train the model(s), which drives copyright and provenance risk in the outputs.</span>

<table><tbody><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/9b9e28a514.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>ND</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>No Data</strong></span><span style="color:#2b2b2b">&nbsp;- The solution requires no external training data (e.g. a pure reinforcement-learning system trained in simulation).</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/299639d9dd.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>LD</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Licensed Data</strong></span><span style="color:#2b2b2b">&nbsp;- Training data is rights-cleared: licensed, commissioned, public domain, or under permissive licences compatible with the intended use.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/614b471293.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>PD</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Proprietary Data</strong></span><span style="color:#2b2b2b">&nbsp;- Trained exclusively on data the organisation owns or fully controls.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/1d906d1605.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>WD</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Web-collected Data</strong></span><span style="color:#2b2b2b">&nbsp;- Training data is known to include material collected from the public web without individual rights clearance. Provenance is broadly known; rights status is contested.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/f8caef50cd.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>UD</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Undisclosed Data</strong></span><span style="color:#2b2b2b">&nbsp;- The vendor provides no usable information about training-data composition (no model card, no documentation). An information gap, to be treated conservatively.</span></p></td></tr></tbody></table>

**Fine-tuning and retrieval.** A capability built on a foundation model and adapted with additional data is a composite: write the base first, then the adaptation, joined by “+”. A vendor model of undisclosed provenance fine-tuned on studio data is <span style="color:#1b2a9e"><strong>UD+PD</strong></span><span style="color:#1d1d1d">.</span>

<table><tbody><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>M</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>Model</strong></span></p><p><span style="color:#6b6456">Availability and ownership of the model weights - </span><span style="color:#6b6456"><em>intrinsic</em></span></p></td></tr></tbody></table>

<span style="color:#1d1d1d">The Model dimension captures who holds the weights and under what terms they may be used. The four options are mutually exclusive.</span>

<table><tbody><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/184f6e4b11.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>OM</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Open Model </strong></span><span style="color:#2b2b2b">- Weights are published under a permissive licence (e.g. MIT, Apache-2.0) allowing commercial use and derivatives.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/6e235867f4.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>RM</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Restricted Model</strong></span><span style="color:#2b2b2b">&nbsp;- Weights are published but the licence restricts use, &nbsp;e.g. non-commercial only, field-of-use limits, output restrictions, or behavioural-use clauses.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/4b8446f764.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>CM</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Closed Model</strong></span><span style="color:#2b2b2b">- Weights are not available; the model is accessed as a vendor-operated service or licensed binary. Permitted uses are defined by the service terms.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/6f23689d88.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>PM</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Proprietary Model</strong></span><span style="color:#2b2b2b">&nbsp;- Developed in-house; weights owned and held by the organisation using them.</span></p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>I</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>Infrastructure</strong></span></p><p><span style="color:#6b6456">Where the capability runs and who controls the boundary - </span><span style="color:#6b6456"><em>part intrinsic, part deployment</em></span></p></td></tr></tbody></table>

<span style="color:#1d1d1d">The Infrastructure dimension captures who controls the security boundary at inference time. Where weights are portable, the adopter chooses this value; where the solution is distribution-locked (a closed-weights service), the vendor fixes it.</span>

<table><tbody><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/dde94c1b1b.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>SI</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Self-Managed Infrastructure</strong></span><span style="color:#2b2b2b">&nbsp;- Runs on infrastructure the organisation fully administers, on-premise hardware or self-managed cloud (IaaS) where the organisation controls images, networking and access.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/47c6aad607.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>DI</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Dedicated Infrastructure</strong></span><span style="color:#2b2b2b">&nbsp;- Vendor-managed but logically or physically isolated for the customer: single-tenant SaaS, customer-VPC deployments, sovereign-cloud arrangements.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/9e5bfd1322.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>MI</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Multi-Tenant Infrastructure</strong></span><span style="color:#2b2b2b">&nbsp;- Standard shared SaaS or public API; the vendor controls the environment and serves many customers from shared infrastructure.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/708e5a3b5e.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>EI</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Edge Infrastructure</strong></span><span style="color:#2b2b2b">&nbsp;- Inference runs locally on end-user devices (workstation, mobile, embedded), typically with vendor-distributed weights.</span></p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>C</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>Code</strong></span></p><p><span style="color:#6b6456">Licensing and ownership of the software - </span><span style="color:#6b6456"><em>intrinsic</em></span></p></td></tr></tbody></table>

<span style="color:#1d1d1d">The Code dimension captures the rights attached to the software implementing the capability. This is particularly relevant given the research-community practice of publishing reference implementations with unclear or restrictive licences.</span>

<table><tbody><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/0316a1e1e2.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>UC</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Unlicensed Code</strong></span><span style="color:#2b2b2b">&nbsp;- No licence is attached to the source code. By default, no permission exists to copy, modify or use it. Public availability (e.g. on a code-hosting site) is not permission.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/afd270f809.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>OC</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Open Code</strong></span><span style="color:#2b2b2b">&nbsp;- Source distributed under a permissive open-source licence (MIT, Apache-2.0, BSD) allowing commercial use.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/9ed08dec27.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>RC</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Restricted Code</strong></span><span style="color:#2b2b2b">&nbsp;- Source available under a licence restricting use, e.g. non-commercial clauses, copyleft obligations incompatible with the organisation's distribution model, or bespoke research licences.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/fdfc76f050.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>CC</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Closed Code</strong></span><span style="color:#2b2b2b">&nbsp;- Source code is not available to the end user.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/3529afaea3.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>PC</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Proprietary Code</strong></span><span style="color:#2b2b2b">&nbsp;- Developed in-house and owned by the organisation using the solution.</span></p></td></tr></tbody></table>

<table><tbody><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>Us</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>Use</strong></span></p><p><span style="color:#6b6456">How the organisation uses the outputs - </span><span style="color:#6b6456"><em>the deployment dimension</em></span></p></td></tr></tbody></table>

<span style="color:#1d1d1d">The Use dimension is different in kind from the other four: it is a property of how an organisation deploys a capability, not of the capability itself. A vendor cannot state it; only the adopting organisation can. It is therefore absent from a capability classification and present in a deployment classification.</span>

Assign the code by walking the questions in order:  
**(1)** Does any model output enter the production workflow at all? If no → <span style="color:#1b2a9e"><strong>BU</strong></span>.  
**(2)** Does any model-generated content persist into the deliverable? If no → <span style="color:#1b2a9e"><strong>PU</strong></span>.  
**(3)** Has the content that persists been substantially reworked by human authors? If yes → <span style="color:#1b2a9e"><strong>IU</strong></span>; if no → <span style="color:#1b2a9e"><strong>DU</strong></span><span style="color:#1d1d1d">.</span>

<table><tbody><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/e9da404891.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>BU</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Business Use</strong></span><span style="color:#2b2b2b">&nbsp;- Outputs support general business operations and never touch the production workflow or deliverables: sales forecasting, IT security, HR screening support, internal search.</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/a4a374ad09.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>PU</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Production Use</strong></span><span style="color:#2b2b2b">&nbsp;- Outputs are used inside the production workflow, but no model-generated content persists into the deliverable: a coding assistant writing pipeline tools, render-queue optimisation, automated QC flags, shot-matching search.</span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/c64c8da4a5.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>IU</strong></span></p></td><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b"><strong>Intermediate Use</strong></span><span style="color:#2b2b2b">&nbsp;- Model-generated content enters the deliverable only after substantial human authorship: concept images used as paint-over reference, generated geometry fully re-topologised and re-textured, draft text rewritten by an author. Test: could the human-authored contribution stand alone as the creative work?</span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 56.00px; height: 56.00px;"><img alt="" src="/AI/doc-images/damicus/d5ae8f57f0.png" style="width: 56.00px; height: 56.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>DU</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b"><strong>Direct Use</strong></span><span style="color:#2b2b2b">&nbsp;- Model-generated content appears in the deliverable without substantial modification: generated fill in a final frame, synthesised voice in a final mix, machine translation published as-is.</span></p><sup><a href="#cmnt1" id="cmnt_ref1">[a]</a></sup></td></tr></tbody></table>

**Enhancement of own content.** Tools that transform the organisation's own material rather than synthesising new content from training data (denoisers, upscalers, ML rotoscoping, motion-blur removal) formally land in <span style="color:#1b2a9e"><strong>DU</strong></span> <span style="color:#1d1d1d">&nbsp;when their output persists into frames. They are nevertheless a different risk profile from generative synthesis, because the creative substance originates in the organisation's own inputs. The common policy classes treat enhancement of the organisation's own content differently from generative delivery (P5), rather than overloading the Use codes.</span>

## <span style="color:#1a36b4">5 &nbsp; Code registry</span>

<span style="color:#1d1d1d">All codes are globally unique. The core registry is shown below; organisation-specific codes (and the optional-extension codes of Appendix A) must not collide with it.</span>

<table><tbody><tr><td colspan="1" rowspan="1" style="background-color:#1b2a9e"><p><span style="color:#ffffff"><strong>Dimension</strong></span></p></td><td colspan="1" rowspan="1" style="background-color:#1b2a9e"><p><span style="color:#ffffff"><strong>Codes</strong></span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b">Data (Da)</span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>ND · LD · PD · WD · UD</strong></span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b">Model (M)</span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>OM · RM · CM · PM</strong></span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b">Infrastructure (I)</span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>SI · DI · MI · EI</strong></span></p></td></tr><tr><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#2b2b2b">Code (C)</span></p></td><td colspan="1" rowspan="1" style="background-color:#ebe4d8"><p><span style="color:#1b2a9e"><strong>UC · OC · RC · CC · PC</strong></span></p></td></tr><tr><td colspan="1" rowspan="1"><p><span style="color:#2b2b2b">Use (Us)</span></p></td><td colspan="1" rowspan="1"><p><span style="color:#1b2a9e"><strong>BU · PU · IU · DU</strong></span></p></td></tr></tbody></table>

## <span style="color:#1a36b4">6 &nbsp; Classifications and policies</span>

<span style="color:#1d1d1d">The framework produces two fundamentally different kinds of artefact:</span>

*   a **Classification** is a factual statement about what something _is_ or how it _is being used_<span style="color:#1d1d1d">;</span>
*   a **Policy** is a normative statement about what an organisation _permits_<span style="color:#1d1d1d">.</span>

<span style="color:#1d1d1d">They look superficially similar but answer different questions, are written by different parties, and use different notation. A classification never contains alternatives or wildcards; a policy routinely does. Anything containing “/” or “*” is a policy.</span>

### <span style="color:#1a36b4">6.1 &nbsp; Solution classification (intrinsic; vendor-publishable)</span>

Describes what a solution _is_, independent of any particular user. It carries the intrinsic dimensions, Data, Model, Code, and the Infrastructure on which the solution is offered. It **does not carry a Use value**<span style="color:#1d1d1d">, because Use is not a property of the artefact. This is the string a vendor can publish in its documentation. A third-party tool described without a Use value is precisely a capability classification.</span>

<span style="color:#1b2a9e"><strong>&lt;Data&gt;-&lt;Model&gt;-&lt;Infra&gt;-&lt;Code&gt; (&lt;version or date&gt;)</strong></span>

<span style="color:#1b2a9e"><strong>Example: &nbsp;WD-CM-MI-CC (Vendor LLM API, 2026-06)</strong></span>

### <span style="color:#1a36b4">6.2 &nbsp; Deployment classification (adds the deployment dimension)</span>

Describes how one organisation _uses_ <span style="color:#1d1d1d">&nbsp;a capability. It takes a capability classification and supplies the missing Use value (confirming Infrastructure where the adopter chose it). All five dimensions are now definite. This is the object a policy is checked against.</span>

<span style="color:#1b2a9e"><strong>&lt;Data&gt;-&lt;Model&gt;-&lt;Infra&gt;-&lt;Code&gt;-&lt;Use&gt; (&lt;version or date&gt;)</strong></span>

<span style="color:#1b2a9e"><strong>Example: &nbsp;WD-CM-MI-CC-PU (Vendor LLM API, 2026-06) &nbsp;[pipeline-tooling deployment]</strong></span>

### <span style="color:#1a36b4">6.3 &nbsp; Policy expression (normative; the permitted set)</span>

Describes the set of classifications an organisation accepts. Each dimension lists permitted codes separated by “/”; “\*” permits any value. A deployment classification **matches** <span style="color:#1d1d1d">&nbsp;a policy if, for every dimension, each of its values (including each member of a “+” composite) is in the permitted set. A policy may contain several rules; matching any one rule is sufficient.</span>

<span style="color:#1b2a9e"><strong>Rule: &nbsp;Da{PD/LD} M{*} I{SI/DI} C{OC/CC/PC} Us{BU/PU/IU}</strong></span>

<span style="color:#1d1d1d">Because a capability classification has no Use value, a policy that constrains Use can only be evaluated against a deployment classification. A vendor's published string is checked against the Use-free part of the policy, with the Use constraint applied when the organisation decides how to deploy. This is the formal version of “the same tool may be allowed for one purpose and not another”.</span>

## <span style="color:#1a36b4">7 &nbsp; Composite and embedded systems</span>

<span style="color:#1d1d1d">Because AI capabilities are increasingly embedded inside larger tools and chained into pipelines, a monolithic classification of a whole product is rarely meaningful. When classifying complex systems and applications, the following rules apply:</span>

**Classify capabilities, not host applications.** <span style="color:#1d1d1d">A DCC package with an embedded generative-fill feature receives a classification for the generative-fill capability; the non-AI parts of the host are out of scope. A product exposes as many Da-M-I-C-Us strings as it has distinct AI capabilities, and a policy can permit some features of a product while prohibiting others.</span>

**Pipelines take the high-water mark.** <span style="color:#1d1d1d">When several capabilities are chained (e.g. an open-weights model pre-processing data for a multi-tenant service), the pipeline's effective classification takes, per dimension, the most restrictive-to-policy value among its components, e.g. Data includes WD if any component was trained on web-collected data; Infrastructure is MI if any component runs as a multi-tenant service. Component classifications should be retained alongside the aggregate.</span>

**Adaptation composes with “+”.** <span style="color:#1d1d1d">Fine-tunes, LoRAs and retrieval corpora compose within the Data (and where relevant Model) dimension as described earlier, preserving both the base and the adaptation in the string.</span>

## <span style="color:#1a36b4">8 &nbsp; Common classification classes</span>

Classification classes name the recurring _shapes_ <span style="color:#1d1d1d">&nbsp;of AI solutions in the market. Each is a capability classification (Data-Model-Infrastructure-Code, with no Use value) given a descriptive label, so that a common solution can be referred to by name. They are factual descriptions, not permissions and whether any of them is acceptable for a given purpose is a matter for the policy classes.</span>

### C1   Frontier[\[b\]](#cmnt2)[\[c\]](#cmnt3)[\[d\]](#cmnt4) <span style="color:#1a36b4">&nbsp;Commercial Model</span>

<span style="color:#1b2a9e"><strong>WD-CM-MI-CC</strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 678.00px; height: 147.00px;"><img alt="" src="/AI/doc-images/damicus/1e520e17a9.png" style="width: 720.00px; height: 383.75px; margin-left: -30.00px; margin-top: -69.13px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">A large, general-purpose model trained on web-collected data, with closed weights, served as a multi-tenant API or web application, on closed source. The dominant shape of general-purpose commercial AI.</span>

**Typical instances.** <span style="color:#1d1d1d">General-purpose chat and coding assistants; image, video and audio generators offered as hosted services by major providers.</span>

**Key characteristic.** <span style="color:#1d1d1d">Maximum capability with maximum opacity on training-data provenance; the rights risk is concentrated in any outputs that ship.</span>

### C2   Rights-Cleared Commercial Model

<span style="color:#1b2a9e"><strong>LD-CM-MI-CC</strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 691.00px; height: 162.98px;"><img alt="" src="/AI/doc-images/damicus/3690755e62.png" style="width: 720.00px; height: 383.98px; margin-left: -16.00px; margin-top: -59.98px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">As C1, but the provider documents or warrants a licensed or owned training corpus.</span>

**Typical instances.** <span style="color:#1d1d1d">“Commercially-safe” generative image and video tools; licensed voice synthesis; generators trained on stock or owned libraries.</span>

**Key characteristic.** <span style="color:#1d1d1d">Provenance risk is materially reduced; the natural candidate where generated content must reach deliverables.</span>

### <span style="color:#1a36b4">C3 &nbsp; Permissive Open Model</span>

<span style="color:#1b2a9e"><strong>WD-OM-SI-OC</strong></span><span style="color:#1b2a9e"><strong>b</strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 692.00px; height: 161.22px;"><img alt="" src="/AI/doc-images/damicus/d031c70033.png" style="width: 720.00px; height: 384.26px; margin-left: -18.00px; margin-top: -58.26px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">An open-weights model under a permissive licence, self-hostable, with open source, trained on web-collected data.</span>

**Typical instances.** <span style="color:#1d1d1d">Permissively-licensed open LLMs and diffusion models run on owned infrastructure.</span>

**Key characteristic.** <span style="color:#1d1d1d">Full deployment control and no vendor dependency; the residual risk is the base model's web-data provenance.</span>

### <span style="color:#1a36b4">C4 &nbsp; Restricted Open Model</span>

<span style="color:#1b2a9e"><strong>WD-RM-SI-RC</strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 694.00px; height: 163.00px;"><img alt="" src="/AI/doc-images/damicus/7647ee382d.png" style="width: 720.00px; height: 384.02px; margin-left: -11.00px; margin-top: -58.98px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">An open-weights model whose licence restricts use (non-commercial or field-of-use limits), often with restrictive source terms.</span>

**Typical instances.** <span style="color:#1d1d1d">Research checkpoints; non-commercial community models; “open but not for commercial use” releases.</span>

**Key characteristic.** <span style="color:#1d1d1d">Usable for evaluation; production use requires a licence upgrade or commercial negotiation.</span>

### <span style="color:#1a36b4">C5 &nbsp; In-House Proprietary Model</span>

<span style="color:#1b2a9e"><strong>PD-PM-SI-PC</strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 690.00px; height: 162.00px;"><img alt="" src="/AI/doc-images/damicus/85a843d302.png" style="width: 720.00px; height: 383.59px; margin-left: -17.00px; margin-top: -58.28px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">A model built, trained and owned entirely in-house on proprietary data, self-hosted, on proprietary code.</span>

**Typical instances.** <span style="color:#1d1d1d">Studio-trained rotoscoping, matchmove or denoising models; internal forecasting; internal search and embeddings.</span>

**Key characteristic.** <span style="color:#1d1d1d">The lowest external risk: no third party touches the data, the weights or the code.</span>

### <span style="color:#1a36b4">C6 &nbsp; On-Device Model</span>

<span style="color:#1b2a9e"><strong>WD-OM-EI-OC</strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 700.00px; height: 166.00px;"><img alt="" src="/AI/doc-images/damicus/892dd038f2.png" style="width: 720.00px; height: 384.02px; margin-left: -11.00px; margin-top: -55.98px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">A model that runs locally on end-user hardware rather than a server.</span>

**Typical instances.** <span style="color:#1d1d1d">On-device speech-to-text; mobile and workstation-local vision models; embedded inference.</span>

**Key characteristic.** <span style="color:#1d1d1d">Inputs never leave the device; provenance still depends on the base model from which it is built.</span>

### C7   Self-Hosted Adapted Model[\[e\]](#cmnt5)[\[f\]](#cmnt6)[\[g\]](#cmnt7)

<span style="color:#1b2a9e"><strong>WD</strong></span><span style="color:#1b2a9e"><strong>+</strong></span><span style="color:#1b2a9e"><strong>PD-OM-SI-OC<br></strong></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 688.00px; height: 199.51px;"><img alt="" src="/AI/doc-images/damicus/28a9e921c8.png" style="width: 720.00px; height: 383.41px; margin-left: -19.00px; margin-top: -62.41px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it is.** <span style="color:#1d1d1d">An open base model adapted on proprietary data and self-hosted. A composite: open base plus proprietary adaptation.</span>

**Typical instances.** <span style="color:#1d1d1d">Studio LoRAs and fine-tunes of open models run on owned infrastructure.</span>

**Key characteristic.** <span style="color:#1d1d1d">The deployment control of C3 plus a proprietary adaptation; the base model's provenance survives in the composite.</span>

## 9   Common policy[\[h\]](#cmnt8)[\[i\]](#cmnt9) <span style="color:#1a36b4">&nbsp;classes</span>

Policy classes name the recurring _stances_ <span style="color:#1d1d1d">&nbsp;an organisation can take. Each is a policy expression over the five dimensions given a descriptive label, so that a policy can be written using class names, e.g. “Business Operations Support is permitted; Rights-Cleared Generative Delivery requires approval”. Each class states what it permits, typical instances, and an explicit boundary naming the adjacent class that picks up an excluded case. Classes may overlap by design; the boundary notes prevent the gaps.</span>

### <span style="color:#1a36b4">P1 &nbsp; Self-Hosted Proprietary</span>

<span style="color:#1b2a9e"><strong>Da{PD/ND} M{PM} I{SI} C{PC/OC} Us{*}</strong></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 287.26px; height: 287.26px;"><img alt="" src="/AI/doc-images/damicus/9d9b9801e6.png" style="width: 287.26px; height: 287.26px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it permits.** <span style="color:#1d1d1d">Capabilities built, trained and operated entirely in-house, proprietary (or no) training data, organisation-owned weights, self-managed infrastructure, &nbsp;for any use. The reference low-risk stance for confidential workflows.</span>

**Typical instances.** <span style="color:#1d1d1d">In-house forecasting, scheduling, search; studio-trained rotoscoping or matchmove models used through to final frames.</span>

**Boundary.** <span style="color:#1d1d1d">Excludes anything adapted from an external base model, e.g. a fine-tune of an open model falls under P3 or P4, because the base's Data value survives composition. Open frameworks (OC) used to build the capability are permitted; open weights are not.</span>

### P2   Business Operations Support

<span style="color:#1b2a9e"><strong>Da{*} M{CM} I{MI/DI} C{CC} Us{BU/PU}</strong></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 295.03px; height: 295.03px;"><img alt="" src="/AI/doc-images/damicus/99f78d920c.png" style="width: 295.03px; height: 295.03px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it permits.** <span style="color:#1d1d1d">Commercial vendor-hosted assistants and productivity services, consumed under an organisational agreement, used anywhere short of generated content persisting into deliverables. Training-data provenance is unconstrained precisely because Use is capped at PU: the contested-data risk attaches to outputs that ship, and here none do.</span>

**Typical instances.** <span style="color:#1d1d1d">Chat and coding assistants for internal work; meeting transcription and summarisation; document drafting for internal consumption; ticket triage; research and pipeline tooling.</span>

**Boundary.** <span style="color:#1d1d1d">Excludes consumer/free tiers and personal accounts accessed without an organisational agreement. Excludes any deployment where output reaches a deliverable: the moment a drafted paragraph ships to a client, the deployment is IU/DU and must qualify under P5.</span>

### <span style="color:#1a36b4">P3 &nbsp; Self-Hosted Open Model</span>

<span style="color:#1b2a9e"><strong>Da{*} M{OM} I{SI/EI} C{OC} Us{BU/PU/IU}</strong></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 272.50px; height: 272.50px;"><img alt="" src="/AI/doc-images/damicus/fa2df9a2a7.png" style="width: 272.50px; height: 272.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it permits.** <span style="color:#1d1d1d">Permissively-licensed open-weights models, self-hosted or on-device, for any use short of unmodified delivery. Self-hosting removes the input-handling and vendor-dependency concerns; what remains is the training-data provenance of the base model, which is why Use is capped at IU.</span>

**Typical instances.** <span style="color:#1d1d1d">Open LLMs on the render farm for pipeline tooling and agents; open image and video models for concept reference and previs; open speech and embedding models inside internal services; studio fine-tunes of open bases.</span>

**Boundary.** <span style="color:#1d1d1d">Excludes restricted-licence weights (RM), &nbsp;those go to P4. Excludes DU: an open model's output shipping unmodified in a deliverable must qualify under P5, which requires evidencing the base model's data provenance.</span>

### <span style="color:#1a36b4">P4 &nbsp; Internal Evaluation Only</span>

<span style="color:#1b2a9e"><strong>Da{*} M{OM/RM} I{SI} C{OC/RC/UC} Us{BU}</strong></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 292.01px; height: 292.01px;"><img alt="" src="/AI/doc-images/damicus/197e524fb7.png" style="width: 292.01px; height: 292.01px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it permits.** <span style="color:#1d1d1d">Research releases, such as papers with code, restricted-licence checkpoints, unlicensed reference implementations, are admitted for internal evaluation only, on self-managed infrastructure so that no confidential material leaves the organisation during testing. Nothing under P4 touches production.</span>

**Typical instances.** <span style="color:#1d1d1d">Reproducing a paper's results; benchmarking a new checkpoint against the incumbent; testing an unlicensed implementation to decide whether to seek a licence.</span>

**Boundary.** <span style="color:#1d1d1d">Excludes production use of any kind. No-licence (UC) code confers no usage rights at all; membership here flags it for legal follow-up, it does not cure it.</span>

### P5   Rights-Cleared Generative Delivery[\[j\]](#cmnt10)

<span style="color:#1b2a9e"><strong>Da{LD/PD} M{CM/PM} I{*} C{CC/PC} Us{IU/DU}</strong></span>

<span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 321.76px; height: 321.76px;"><img alt="" src="/AI/doc-images/damicus/01f590aa97.png" style="width: 321.76px; height: 321.76px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span>

**What it permits.** <span style="color:#1d1d1d">Generative content that reaches deliverables, where the training data is rights-cleared (LD) or the organisation's own (PD). The constrained Data value is the safeguard: only cleared- or owned-data models may contribute content that ships.</span>

**Typical instances.** <span style="color:#1d1d1d">Commercially-safe image and video generators used for final content; licensed voice synthesis in final mixes; generative fill from providers documenting their training set; in-house generative models trained on owned libraries.</span>

**Boundary.** <span style="color:#1d1d1d">Excludes WD/UD bases in any position of a composite. A WD+PD fine-tune does not qualify, however clean the adaptation. Enhancement-type features, whose content originates in the organisation's own inputs, are assessed separately.</span>

## <span style="color:#1a36b4">10 &nbsp; Policy examples</span>

<span style="color:#1d1d1d">With the catalogue in place, policies become short and legible. These are policies (normative); they are checked against deployment classifications.</span>

### <span style="color:#1a36b4">Internal adoption policy (illustrative)</span>

<span style="color:#1b2a9e"><strong>Permitted: &nbsp; P1, P2, P3, P4</strong></span>

<span style="color:#1b2a9e"><strong>By approval: P5 (legal sign-off per deployment)</strong></span>

<span style="color:#1b2a9e"><strong>Note: &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;consumer/unmanaged access is excluded (outside all classes)</strong></span>

### <span style="color:#1a36b4">Partner / vendor guidelines (illustrative)</span>

<span style="color:#1b2a9e"><strong>Policy 1: Da{PD/LD} M{*} I{*} C{OC/CC/PC} Us{*}</strong></span>

<span style="color:#1b2a9e"><strong>Policy 2: Da{*} M{*} I{*} C{OC/CC/PC} Us{BU/PU}</strong></span>

<span style="color:#1b2a9e"><strong>rights-cleared-data terms (P5) for anything</strong></span>

<span style="color:#1b2a9e"><strong>reaching delivered material; otherwise anything short of</strong></span>

<span style="color:#1b2a9e"><strong>deliverables (P1, P2, P3, P4).</strong></span>

<span style="color:#1d1d1d">Partners may use anything on rights-cleared data, or anything at all provided no generated content enters the material they deliver. Each delivered deployment classification is checked against the rules mechanically. Because partners' published strings are capability classifications, the Use constraints in these rules bind at the point the partner decides how to deploy.</span>

## <span style="color:#1a36b4">Appendix A &nbsp; Extensions to the Framework</span>

<span style="color:#2b2b2b">While the Da-M-I-C-Us framework defines the core set of Data, Model, Infrastructure, Code and Use dimensions, it is easy to see how the general approach could be extended to include additional criteria that may be relevant to a specific industry or category of users.</span>

<span style="color:#2b2b2b">For example, the framework could be extended to include the following criteria:</span>

<span style="color:#2b2b2b">·</span>       <span style="color:#2b2b2b"><strong>Confidentiality -</strong></span> <span style="color:#2b2b2b">&nbsp;this could classify the solution based on whether they are able to generate or represent different classes of data based on their availability Public Data, Confidential Data, Critical Data</span>

<span style="color:#2b2b2b">·</span>       <span style="color:#2b2b2b"><strong>Societal Risks - </strong></span> <span style="color:#2b2b2b">this could classify the solution based on societal risks, from low to high</span>

<span style="color:#2b2b2b">·</span>       <span style="color:#2b2b2b"><strong>Ethical Risks - </strong></span> <span style="color:#2b2b2b">this could classify whether the solution is to be considered ethical based on a well defined set of criteria</span>

<span style="color:#2b2b2b">In addition, a specific industry may define additional options for one of the existing dimensions to accurately capture their requirements. For instance the Music industry may be interested in separating the use case where a solution is used to replicate or reproduce the voice of a singer or not. In this case, one or more options may be added to the list of options.</span>