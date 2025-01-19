# CREATING UML DIAGRAMS AND IMPLEMENTING CLASSES.
A

## TITLE
-- HOSPITAL MANAGEMENT SYSTEM

## DESCRIPTION
 -- This system handles patient records, appointments, and medical staff schedules.
 -- It also tracks doctors, patients, treatments, and prescriptions.


### UML CLASS DIAGRAM STRUCTURE
-- Class: Patient
   Attributes:
   - name (String)
   - age (Number)
   Methods: 
   - getDetails()
   - updateAge(newAge)

-- Class: Doctor
   Attributes:
   - name (String)
   - specialization (String)
   Methods:
   - getDetails()
   - scheduleAppointment(patient)

-- Class: Appointment
   Attribute:
   - patient (Object of type Patient)
   - doctor (Object of type Doctor)
   - date (String)
   - time (String)
   Method:
   - schedule()
   - getDetails()

   Static Properties:
   - totalDoctors
   - totalPatients
   - totalAppointments

### CLASS DIAGRAM
- LINK: https://lucid.app/lucidchart/f1b8725e-70c8-479c-bd16-ba738c158bf0/edit?viewport_loc=-615%2C-511%2C2529%2C1440%2CHWEp-vi-RSFO&invitationId=inv_6cea4c66-7b7a-463d-a302-b1ca76688413


   ### CODE IMPLEMENTATION
   - LINK: 
