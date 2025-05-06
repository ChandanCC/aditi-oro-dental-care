/**
 * Represents a dental clinic.
 */
export interface Clinic {
  /**
   * The name of the clinic.
   */
  name: string;
  /**
   * The city where the clinic is located.
   */
  city: string;
  /**
   * The address of the clinic.
   */
  address: string;
  /**
   * The phone number of the clinic.
   */
  phoneNumber: string;
  /**
   * The opening hours of the clinic.
   */
  openingHours: string;
}

/**
 * Represents a doctor.
 */
export interface Doctor {
  /**
   * A unique identifier for the doctor, suitable for URLs.
   */
  id: string;
  /**
   * The name of the doctor.
   */
  name: string;
  /**
   * The specialization of the doctor.
   */
  specialization: string;
  /**
   * The profile picture of the doctor.
   */
  profilePicture: string;
  /**
   * The clinics where the doctor is available.
   */
  clinics: string[];
  /**
   * A detailed biography of the doctor.
   */
  bio?: string;
}

/**
 * Asynchronously retrieves the list of clinics.
 * @returns A promise that resolves to an array of Clinic objects.
 */
export async function getClinics(): Promise<Clinic[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      name: 'Aditi Oro Dental Clinic - Bangalore 1',
      city: 'Bangalore',
      address: 'Address 1, Bangalore',
      phoneNumber: '123-456-7890',
      openingHours: 'Mon-Sat: 9am - 9pm',
    },
    {
      name: 'Aditi Oro Dental Clinic - Bangalore 2',
      city: 'Bangalore',
      address: 'Address 2, Bangalore',
      phoneNumber: '123-456-7890',
      openingHours: 'Mon-Sat: 9am - 9pm',
    },
    {
      name: 'Aditi Oro Dental Clinic - Bangalore 3',
      city: 'Bangalore',
      address: 'Address 3, Bangalore',
      phoneNumber: '123-456-7890',
      openingHours: 'Mon-Sat: 9am - 9pm',
    },
    {
      name: 'Aditi Oro Dental Clinic - Bangalore 4',
      city: 'Bangalore',
      address: 'Address 4, Bangalore',
      phoneNumber: '123-456-7890',
      openingHours: 'Mon-Sat: 9am - 9pm',
    },
    {
      name: 'Aditi Oro Dental Clinic - Ranchi',
      city: 'Ranchi',
      address: 'Address 1, Ranchi',
      phoneNumber: '123-456-7890',
      openingHours: 'Mon-Sat: 10am - 8pm',
    },
  ];
}

/**
 * Asynchronously retrieves the list of doctors.
 * @returns A promise that resolves to an array of Doctor objects.
 */
export async function getDoctors(): Promise<Doctor[]> {
  // TODO: Implement this by calling an API.

  return [
    {
      id: 'john-doe',
      name: 'Dr. John Doe',
      specialization: 'General Dentist',
      profilePicture: '/images/doctor-john-doe.jpg',
      clinics: ['Aditi Oro Dental Clinic - Bangalore 1'],
      bio: 'Dr. John Doe is a highly experienced General Dentist with over 10 years of practice. He is passionate about providing comprehensive dental care to patients of all ages. Dr. Doe graduated from the prestigious Bangalore Institute of Dental Sciences and has since attended numerous workshops and conferences to stay updated with the latest advancements in dentistry. He specializes in preventive care, restorative treatments, and cosmetic dentistry. Patients appreciate his gentle approach and his ability to explain complex dental procedures in a simple and understandable manner. In his free time, Dr. Doe enjoys reading and spending time with his family.',
    },
    {
      id: 'jane-smith',
      name: 'Dr. Jane Smith',
      specialization: 'Orthodontist',
      profilePicture: '/images/doctor-jane-smith.jpg',
      clinics: ['Aditi Oro Dental Clinic - Bangalore 2', 'Aditi Oro Dental Clinic - Ranchi'],
      bio: 'Dr. Jane Smith is a renowned Orthodontist known for her expertise in correcting misaligned teeth and jaws. She completed her Masters in Orthodontics from Manipal College of Dental Sciences and has transformed thousands of smiles. Dr. Smith is proficient in various orthodontic techniques, including traditional braces, clear aligners, and lingual braces. She is committed to providing personalized treatment plans to achieve optimal results for her patients. Her friendly demeanor and dedication to patient comfort make her a favorite among both children and adults. Dr. Smith is an active member of the Indian Orthodontic Society and regularly participates in CDE programs.',
    },
  ];
}

/**
 * Asynchronously retrieves a single doctor by their ID.
 * @param id The ID of the doctor to retrieve.
 * @returns A promise that resolves to a Doctor object, or undefined if not found.
 */
export async function getDoctorById(id: string): Promise<Doctor | undefined> {
  const doctors = await getDoctors();
  return doctors.find(doctor => doctor.id === id);
}
