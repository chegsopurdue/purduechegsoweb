const president = {initials: 'DN', 
                   name: 'Daniel Nasr',          
                   role: 'President',              
                   email: 'dnasr@purdue.edu',      
                   group: 'top',     
                   advisor: 'Dr. Stephen Beaudoin',
                   photo: '/images/board/dany5.jpeg' 
                  }

const vicePresident = {initials: 'PA', 
                       name: 'Phin Ariyaphuttarat',  
                       role: 'Vice President',         
                       email: 'pariyaph@purdue.edu',   
                       group: 'top',     
                       advisor: 'Dr. Kelly Schultz',
                       photo: '/images/board/phin3.jpeg' 
                      }

const social_chair = {initials: 'AS', 
                      name: 'Auggie Sison',         
                      role: 'Social Chair',           
                      email: 'asison@purdue.edu',     
                      group: 'middle1', 
                      advisor: 'Dr. Stephen Beaudoin and Dr. Rex Rekalitis',
                      photo: '/images/board/auggie3.jpeg' 
                      }

const coCurricular = {initials: 'PS', 
                      name: 'Pravinkumar Sahu',     
                      role: 'Co-Curricular Chair',    
                      email: 'sahu22@purdue.edu',    
                      group: 'middle1', 
                      advisor: 'Dr. Rex Reklaitis',
                      photo: '/images/board/pk1.jpg' 
                      }

const outreach = {initials: 'EN', 
                  name: 'Eric Nigro',           
                  role: 'Outreach Chair',         
                  email: 'nigroe@purdue.edu',     
                  group: 'middle1', 
                  advisor: 'Dr. Kurt Ristroph',
                  photo: '/images/board/eric.jpeg'
                 }

const safety = {initials: 'AT', 
                name: 'Allan Tan',            
                role: 'Safety Chair',           
                email: 'tan588@purdue.edu',     
                group: 'middle1', 
                advisor: 'Dr. Dave Corti',
                photo: '/images/board/allan2.jpeg' 
              }

const advocacy = {initials: 'LG', 
                  name: 'Luisdomingo Guzman',   
                  role: 'Student Advocacy',       
                  email: 'lguzmanj@purdue.edu',   
                  group: 'middle2', 
                  advisor: 'Dr. Zoltan Nagy',
                  photo: '/images/board/luisdo3.jpeg' 
                }

const sports = {initials: 'SS', 
                name: 'Sathwik Sreenivasan',  
                role: 'Sports Chair',           
                email: 'gsreeni@purdue.edu',    
                group: 'middle2', 
                advisor: 'Dr. Kelly Schultz',
                photo: '/images/board/sathwik2.jpeg' 
              }

const cultural = {initials: 'DD', 
                  name: 'Dylan Durand',         
                  role: 'Cultural Ambassador',    
                  email: 'durandd@purdue.edu',    
                  group: 'middle2', 
                  advisor: 'Dr. Kelly Schultz',
                  photo: '/images/board/dylan.jpeg' 
                }

const pgsg = {initials: 'AH', 
                  name: 'Anja Hribljan',         
                  role: 'PGSG Representative',    
                  email: 'ahriblja@purdue.edu',    
                  group: 'middle2', 
                  advisor: 'Dr. David Bernal',
                  photo: '/images/board/anja3.jpeg' 
                }

const firstYear1 = {initials: 'AF', 
                    name: 'Ainslee Fogleman',     
                    role: 'First-Year Rep',         
                    email: 'afoglema@purdue.edu',   
                    group: 'bottom',  
                    advisor: 'Dr. David Hibbitts',
                    photo: '/images/board/ainslee1.jpg' 
                  }

const firstYear2 = {initials: 'GG', 
                    name: 'Garrett Gregory',       
                    role: 'First-Year Rep',         
                    email: 'grego131@purdue.edu',   
                    group: 'bottom',  
                    advisor: 'Dr. Rajamani Gounder',
                    photo: '/images/board/garrett2.jpeg' 
                  }

const communications = {initials: 'RR',
                        name: 'Rafif Ramadhan',       
                        role: 'Communications Chair',   
                        email: 'rramadha@purdue.edu',   
                        group: 'bottom',  
                        advisor: 'Dr. Can Li',
                        photo: '/images/board/rafif3.jpeg' 
                      }

export const officers = [president, vicePresident, social_chair, coCurricular, outreach, safety, advocacy, sports, cultural, pgsg, firstYear1, firstYear2, communications]

export const activities = [
  {
    icon: 'goggles',
    name: 'Safety',
    href: '/activities/safety',
    desc: 'Safety seminars via ChESS and representation on the CHE Safety Committee.',
  },
  {
    icon: 'confetti',
    name: 'Social Events',
    href: '/activities/social',
    desc: 'Quiz bowl, ice skating, mini golf, bowling, happy hour, and more throughout the year.',
  },
  {
    icon: 'school',
    name: 'Co-Curricular',
    href: '/activities/co-curricular',
    desc: 'Truth & Beauty and Future Faculty seminars, professional development events.',
  },
  {
    icon: 'leaf',
    name: 'Sustainability',
    href: '/activities/sustainability',
    desc: 'Recycling initiatives, clothing drives, and sustainability programming within the School.',
  },
  {
    icon: 'ball-football',
    name: 'Sports',
    href: '/activities/sports',
    desc: 'Intramural sports teams, kickball, frisbee, and informal sporting events.',
  },
  {
    icon: 'world',
    name: 'Outreach',
    href: '/activities/outreach',
    desc: 'After School Science Education at Murdock Elementary and more community support.',
  },
]

export const navLinks = [
  { label: 'Home',                href: '/' },
  { label: 'About',               href: '/about' },
  { label: 'Symposium',           href: '/symposium' },
  { label: 'Prospective Students',href: '/prospective' },
  {
    label: 'Activities',
    href: '#',
    children: [
      { label: 'Safety',          href: '/activities/safety' },
      { label: 'Social',          href: '/activities/social' },
      { label: 'Co-Curricular',   href: '/activities/co-curricular' },
      { label: 'Sustainability',  href: '/activities/sustainability' },
      { label: 'Sports',          href: '/activities/sports' },
      { label: 'Outreach',        href: '/activities/outreach' },
    ],
  },
]

export const footerLinks = {
  Organization: [
    { label: 'About & Officers',  href: '/about' },
    { label: 'Feedback Form',     href: 'https://purdue.ca1.qualtrics.com/jfe/form/SV_bOh7XT8LsJtlWLQ' },
  ],
  Students: [
    { label: 'Prospective Students', href: '/prospective' },
    { label: 'Symposium',            href: '/symposium' },
    { label: 'GSO Calendar',         href: 'https://calendar.google.com/calendar/embed?src=v3k26sl8evn1c6qaos8h6atli8%40group.calendar.google.com&ctz=America%2FNew_York' },
  ],
  Activities: [
    { label: 'Safety',         href: '/activities/safety' },
    { label: 'Social Events',  href: '/activities/social' },
    { label: 'Co-Curricular',  href: '/activities/co-curricular' },
    { label: 'Sustainability', href: '/activities/sustainability' },
    { label: 'Sports',         href: '/activities/sports' },
    { label: 'Outreach',       href: '/activities/outreach' },
  ],
}

export const social = {
  email:     'mailto:dnasr@purdue.edu', // General contact email (President's email)
  instagram: 'https://www.instagram.com/chegsopurdue',
  linkedin:  'https://www.linkedin.com/company/purdue-che-gso',
}
