# An Integrated Virtual Health Consultation Platform

## Live Site



## Github Repo

https://github.com/VinGitonga/medx

## Purpose

MedX is a holistic health services consultation platform that seeks to integrate common medical practice task and processes into a unified system. The application primarily aims to merge the scheduling of appointments, patient summaries, past visit details into a single piece of software. At its basis, MedX will serve as a management and interaction portal between doctors and patients where healthcare information can be shared and stored privately.

One of the primary aims for developing the website is to built a holistic healthcare solution that can be adopted by multiple medical institutions and their patients. As a result common tasks like check up scheduling, documentation of patient health and billing can be integrated into a single system. The benefit pf syntheising recurrent tasks into a piece of software become evident via the time saved on processing medical management and moreover client info can be accessed in a single location which aids at smoothening the way the records are managed between concerned organizations.

## Functionalities and Features

### MVP Functionality


#### User auth system

Authentication is needed for clients to use the app, as a user and profile are needed to make bookings with medical practioners.
Similarly doctors also need to authenticated to manage the bookings as well so as to protect access the sensitive client data.

- Role-based auth
- Users can either be Doctor or Patient
- Roles are presented at homepage

#### Appointment booking
- Doctors can approve or reject appointments
- Clients can create, update or delete appointments
- Both Doctors and Clients can view their upcoming appointments

#### Dashboard - Doctor
- Overview list of all current patients
- Each patient has a profile which displays all relevant basic user info
- Doctors have the ability to add notes about the patient
- Symptoms and general comments
- List of Upcoming appointments

#### Dashboard - Patient
- Able to see all doctors on MedX
- Ability to select a Doctor and view their appointments
- View all their past appointments


### Extended Functionality

#### Live text chat/messaging between doctor and patient
- From either the client or doctor dashboard, there will be the ability to initiate a live text chat, that is confidential between them


## Target Audience
MedX is targeted towards medical professionals, including general practioners, physicians and their patients.
For instance, a medical clinic can register their practice and gain access to features available and on another hand their clients can signup and access tailored services such as telehealth, appointment booking and access to previous visits.
Due to the current global crisis of the spread of COVID-19, MedX aims at facilitating consultations in order to reduces the risk of transmission between doctors and patients alike.

## Tech Stack

- Firebase
- React
- Chakra-UI
- React Context API

MedX utilizes a number of open source libraries to assist with faster development time and improved auth security.
