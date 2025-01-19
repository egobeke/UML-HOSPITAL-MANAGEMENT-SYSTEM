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
- LINK: 

   ### CODE IMPLEMENTATION
   - LINK: 
