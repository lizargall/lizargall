---
sidebar_position: 1
id: intro
title: Introduction to Project Aria Docs
---

:::info Writing Sample
This page is based on technical writing I did for Project Aria. There's always room for improvement, so I've made a few revisions! Some of the links will be broken, as I did not bring across the whole site. For the most up to date documentation go to [Project Aria Docs](https://facebookresearch.github.io/projectaria_tools/docs/intro).
:::

Project Aria is a research platform designed to accelerate egocentric (from a human perspective) AI research. Project Aria data, tooling and resources helps advance research around the world in areas such as computer vision, robotics, and contextual AI. 

Many of the world’s leading research communities will need to collectively work together to solve big challenges in these fields. To support these efforts, Project Aria provides Open Science Initiatives (OSI) and the Aria Research Kit (ARK).

![Visualization of Nymeria data using Aria Data Explorer](/img/aria_docs/nymeria_explorer.png)
**Figure 1:** *Visualization from the Nymeria open dataset*

<!-- ## Open Science Initiatives (OSI)

We believe that open source accelerates the pace of innovation in the world. We’re excited to share our code, models and data.

OSI offerings include:
* Open-sourced egocentric datasets
    * Raw egocentric data
    * Derived data outputs such as trajectory, hand tracking and eye gaze
* Models for egocentric AI applications
* Tooling for working with the datasets 
* Research challenges sponsoring advancement around specific AI problems

Explore some of our datasets and visualizers using the [Aria Dataset Explorer](https://explorer.projectaria.com/).


## Aria Research Kit (ARK)
Researchers can partner with Project Aria to get their own Project Aria glasses for egocentric data collection or streaming as well as software to interact with the glasses. Researchers can use a cloud based service, Machine Perception Services (MPS), to generate derived data outputs from the raw data.

Through the Client SDK researchers can create custom applications and integrations for Project Aria devices.

Qualified academic and commercial research partners can apply to become [Aria Research Partners](https://www.projectaria.com/research-kit/). -->

<!-- ![About Project Aria, showing services provided, simliar to what is in the FAQ](/img/aria_docs/intro.png) -->

## New to Project Aria?

* Go to [projectaria.com](http://projectaria.com) to get an overview of the program
* Go to [Aria Dataset Explorer](https://explorer.projectaria.com/) to search and preview some of Aria’s open data
* Go to the [Project Aria FAQ](faq.mdx) for an overview of our current service offerings, capabilities and software ecosystem

## Want to get involved with Open Science Initiatives (OSI)?

We believe that open source accelerates the pace of innovation in the world. We’re excited to share our code, models and data.

Open datasets powered by Project Aria data include:

* [Aria Everyday Activities (AEA)](/open_datasets/aria_everyday_activities_dataset/aria_everyday_activities_dataset.mdx) - a re-release of Aria’s first Pilot Dataset, updated with new tooling and location data, to accelerate the state of machine perception and AI.
* [Aria Digital Twin (ADT)](https://www.projectaria.com/datasets/adt/) - a real-world dataset, with hyper-accurate digital counterpart & comprehensive ground-truth annotation
* [Aria Synthetic Environments (ASE)](https://www.projectaria.com/datasets/ase/) - a procedurally-generated synthetic Aria dataset for large-scale ML research
* [HOT3D](https://www.projectaria.com/datasets/hot3d/) - a new benchmark dataset for vision-based understanding of 3D hand-object interactions
* [Nymeria](https://www.projectaria.com/datasets/nymeria/) - a large-scale multimodal egocentric dataset for full-body motion understanding


Research challenges, using our open datasets, are posted to [projectaria.com](https://www.projectaria.com/challenges/).

Models created using Aria data include:
* [EgoBlur](https://www.projectaria.com/tools/egoblur/) - an open source AI model from Meta to preserve privacy by detecting and blurring PII from images. Designed to work with egocentric data (such as Aria data) and non-egocentric data.
* [Project Aria Eye Tracking](https://github.com/facebookresearch/projectaria_eyetracking) - an open source inference code for the [Pre March 2024 Eye Gaze Model](/data_formats/mps/mps_eye_gaze.mdx) used by Machine Perception Services (MPS)

Aria data is recorded using [VRS](/data_formats/aria_vrs/aria_vrs.mdx), an open source file format. Our open source code, [Project Aria Tools](/data_utilities/data_utilities.mdx), provides a C++ and Python interface that helps people incorporate VRS data into a wide range of downstream applications.


## Interested in getting access to the Aria Research Kit (ARK)?

Through our OSI data, tooling and research challenges we aim to support the broadest audience of the research community. For researchers who also need access to a [physical Project Aria device](/tech_spec/hardware_spec.mdx), we offer the [Aria Research Kit (ARK)](https://www.projectaria.com/research-kit/).

Project Aria devices can be used to:

* Collect data
    * In addition to capturing data from a single device, TICSync can be used to capture time synchronized data from multiple Aria devices in a shared world location
    * Cloud based Machine Perception Services (MPS) are available to generate SLAM, Multi-SLAM, Eye Gaze and Hand Tracking derived data outputs. Partner data is only used to serve MPS requests. Partner data is not available to Meta researchers or Meta’s affiliates.
* Stream data
    * Use the Project Aria Client SDK to stream and subscribe to data on your local machine

Before applying for the ARK, please explore our OSI offerings, [FAQ](/faq.mdx). Once you are confident that the ARK is a good match for your research, please apply for the Aria Research Kit.

* [Project Aria: Academic Partnership Interest Form](https://www.facebook.com/help/contact/409561724891076)
* [Project Aria: Corporate Partnership Interest Form](https://docs.google.com/forms/d/e/1FAIpQLSeEQkP6zM-T2mrn5WUy2K-CliiXPXXmgHUEmT20FtAk5fi6vw/viewform)

Our team will review your application and reach out to you with next steps if you are approved for the ARK.


## Just received Project Aria glasses?

* [About ARK](/ARK/about_ARK.mdx) provides an overview of different ways you can use the device
* The [Quickstart Guide](/ARK/ARK_quickstart.mdx) covers how to set up your glasses
* The [Glasses User Manual](/ARK/glasses_manual/glasses_user_manual.mdx) provides a range of information, including how to factory reset your glasses

If you encounter any issues, go to our [Support page](/support.mdx) for multiple ways to get in touch!
