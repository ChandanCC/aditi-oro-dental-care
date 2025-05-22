
/**
 * Represents a dental clinic.
 */
export interface Clinic {
  /**
   * A unique identifier for the clinic, suitable for URLs.
   */
  id: string;
  /**
   * The name of the clinic.
   */
  name: string;
  /**
   * The city where the clinic is located.
   */
  city: 'Bangalore' | 'Ranchi'; // Made city type more specific
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

// Helper function to generate a slug from a string
const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};


const clinicsData: Omit<Clinic, 'id'>[] = [
  {
    name: 'Aditi Oro Dental Clinic - Whitefield',
    city: 'Bangalore',
    address: '123, Whitefield Main Road, Bangalore, Karnataka 560066',
    phoneNumber: '+91 98765 43210',
    openingHours: 'Mon-Sat: 9:00 AM - 8:00 PM',
  },
  {
    name: 'Aditi Oro Dental Clinic - Indiranagar',
    city: 'Bangalore',
    address: '456, Indiranagar 100 Feet Road, Bangalore, Karnataka 560038',
    phoneNumber: '+91 98765 43211',
    openingHours: 'Mon-Sat: 9:30 AM - 8:30 PM',
  },
  {
    name: 'Aditi Oro Dental Clinic - Koramangala',
    city: 'Bangalore',
    address: '789, Koramangala 5th Block, Bangalore, Karnataka 560095',
    phoneNumber: '+91 98765 43212',
    openingHours: 'Mon-Sat: 10:00 AM - 7:00 PM',
  },
  {
    name: 'Aditi Oro Dental Clinic - Jayanagar',
    city: 'Bangalore',
    address: '101, Jayanagar 4th Block, Bangalore, Karnataka 560011',
    phoneNumber: '+91 98765 43213',
    openingHours: 'Mon-Fri: 9:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM',
  },
  {
    name: 'Aditi Oro Dental Clinic - Main Road Ranchi',
    city: 'Ranchi',
    address: '202, Main Road, Ranchi, Jharkhand 834001',
    phoneNumber: '+91 99027 80440',
    openingHours: 'Mon-Sat: 10:00 AM - 7:30 PM',
  },
   {
    name: 'Aditi Oro Dental Clinic - Ashok Nagar Ranchi',
    city: 'Ranchi',
    address: '505, Ashok Nagar, Road No. 4, Ranchi, Jharkhand 834002',
    phoneNumber: '+91 99027 80441',
    openingHours: 'Mon-Sat: 9:00 AM - 6:00 PM',
  },
];

const doctorsData: Omit<Doctor, 'id'>[] = [
  {
    name: 'Dr. John Doe',
    specialization: 'General Dentist',
    profilePicture: '/images/doctor-john-doe.jpg',
    clinics: ['Aditi Oro Dental Clinic - Whitefield', 'Aditi Oro Dental Clinic - Indiranagar'],
    bio: 'Dr. John Doe is a highly experienced General Dentist with over 10 years of practice. He is passionate about providing comprehensive dental care to patients of all ages. Dr. Doe graduated from the prestigious Bangalore Institute of Dental Sciences and has since attended numerous workshops and conferences to stay updated with the latest advancements in dentistry. He specializes in preventive care, restorative treatments, and cosmetic dentistry. Patients appreciate his gentle approach and his ability to explain complex dental procedures in a simple and understandable manner. In his free time, Dr. Doe enjoys reading and spending time with his family.',
  },
  {
    name: 'Dr. Jane Smith',
    specialization: 'Orthodontist',
    profilePicture: '/images/doctor-jane-smith.jpg',
    clinics: ['Aditi Oro Dental Clinic - Koramangala', 'Aditi Oro Dental Clinic - Main Road Ranchi'],
    bio: 'Dr. Jane Smith is a renowned Orthodontist known for her expertise in correcting misaligned teeth and jaws. She completed her Masters in Orthodontics from Manipal College of Dental Sciences and has transformed thousands of smiles. Dr. Smith is proficient in various orthodontic techniques, including traditional braces, clear aligners, and lingual braces. She is committed to providing personalized treatment plans to achieve optimal results for her patients. Her friendly demeanor and dedication to patient comfort make her a favorite among both children and adults. Dr. Smith is an active member of the Indian Orthodontic Society and regularly participates in CDE programs.',
  },
];


/**
 * Asynchronously retrieves the list of clinics.
 * @returns A promise that resolves to an array of Clinic objects.
 */
export async function getClinics(): Promise<Clinic[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return clinicsData.map(clinic => ({
    ...clinic,
    id: slugify(`${clinic.city}-${clinic.name}`), // Ensure unique IDs by including city
  }));
}

/**
 * Asynchronously retrieves a single clinic by its ID.
 * @param id The ID of the clinic to retrieve.
 * @returns A promise that resolves to a Clinic object, or undefined if not found.
 */
export async function getClinicById(id: string): Promise<Clinic | undefined> {
  const clinics = await getClinics();
  return clinics.find(clinic => clinic.id === id);
}


/**
 * Asynchronously retrieves the list of doctors.
 * @returns A promise that resolves to an array of Doctor objects.
 */
export async function getDoctors(): Promise<Doctor[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  return doctorsData.map(doctor => ({
    ...doctor,
    id: slugify(doctor.name),
  }));
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
