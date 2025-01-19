// Hospital Management System

// Define Patient Class
class Patient {
    // Static property
 static totalPatient = 0;

 // Constructor for patient instances
 constructor(name,age) {
    this.name = name; // Patient's name
    this.age = age; // Patient's age
    Patient.totalPatients++; // Increment total patients count
 }

 // Static method to get the total number of patients
 static getTotalPatients() {
    return `Total Patients: ${Patient.totalPatients}`;
 }  
 
 // Method to get patient details
 getDetails() {
    return `Patient Name: ${this.name}, Age: ${this.age}`;
 }

 // Method to update patient age
 updateAge(newAge) {
    this.age = newAge; 
    return `Age for ${this.name} updated to ${this.age}`;
 }
}

// Define Doctor Class
class Doctor {
    // Static property
    static totalDoctors = 0;

    // Constructor for doctor instances
    constructor(name, specialization) {
        this.name = name; // Doctor's name
        this.specializtion = specialization; // Doctor's specialization
        Doctor.totalDoctors++; // Increment total doctors count
    }

    // Static method to get the total number of doctors
    static getTotalDoctors() {
       return `Total Doctors: ${Doctor.totalDoctors}`; 
    }

    // Method to get doctor details
    getDetails() {
        return `Doctor Name: ${this.name}, Specialization: ${this.specialization}`;
    }

    // Method to schedule an appointment with a patient
    scheduleAppointment(patient) {
        return `Appointment scheduled for Patient: ${patient.name} with Dr. ${this.name}.`;
    }
}

// Define Appointment Class
class Appointment {
    // Static property
    static totalAppointments = 0;

    // Constructor for appointment instances
    constructor(patient, doctor, date, time) {
        this.patient = patient; // Patient Object
        this.doctor = doctor; // Doctor Object
        this.date = date; // Appointment date
        this.time = time; // Appointment time
        Appointment.totalAppointment++; // Increment total appointments count
    }
    
    // Static method to get the total number of appointments
    static getTotalAppointments() {
        return `Total Appointments: ${Appointment.totalAppointments}`;
    }

    // Method to get appointment details
    getDetails() {
        return `Appointment Details:
        Patient: ${this.patient.name}
        Doctor: ${this.doctor.name}
        Date: ${this.date}
        Time: ${this.time}`;
    }

    // Method to schedule Appointment
    schedule() {
       return `Appointment scheduled for ${this.patient.name} with Dr. ${this.doctor.name} on ${this.date} at ${this.time}.`; 
    }
}


// Example Usage
const patient1 = new Patient("Ada",27);

const doctor1 = new Doctor("Dr. Ego", "Opthamology");

const appointment1 = new Appointment(patient1, doctor1, "2025-01-19", "02:00 PM");

//Get details
console.log(patient1.getDetails()); // Patient details
console.log(patient1.updateAge(28)); // Age updated

console.log(doctor1.getDetails()); // Doctor details
console.log(doctor1.scheduleAppointment(patient1)); // Appointment scheduled

console.log(appointment1.getDetails()); // Appointment details
console.log(doctor1.scheduleAppointment(patient1)); 





