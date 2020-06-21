//mechanics - mech
//thermodynamics - thermo
//electrostatics - elec
//electromagnetism - mag
//quantum - quantum
//relativity - rel
//optics - opt
//nuclear/other - other

var iphodata = [

	{ 'year':'2019', 
	  'country':'Israel', 
	  'problems':
												[{'title':'Springs and Slinky',
												'probLink':'files/ipho/2019_Israel_p1.pdf', 'solLink':'files/ipho/2019_Israel_p1Sol.pdf',
												'topics':['mech']},

												{'title':'Physics of Microwave Oven',
												'probLink':'files/ipho/2019_Israel_p2.pdf', 'solLink':'files/ipho/2019_Israel_p2Sol.pdf',
												'topics':['mag']},

												{'title':'Thermoacoustic Engine',
												'probLink':'files/ipho/2019_Israel_p3.pdf', 'solLink':'files/ipho/2019_Israel_p3Sol.pdf',
												'topics':['thermo']}]
				},

	{ 'year':'2018', 'country':'Portugal', 'problems':
                        [{'title':'LIGO',
                        'probLink':'files/ipho/2018_Portugal_p1.pdf', 'solLink':'files/ipho/2018_Portugal_p1Sol.pdf',
                        'topics':['rel', 'mag', 'other'],
												'hist':'2018_T1.png'},

                        {'title':'Where is Neutrino',
                        'probLink':'files/ipho/2018_Portugal_p2.pdf', 'solLink':'files/ipho/2018_Portugal_p2Sol.pdf',
                        'topics':['thermo', 'quantum', 'other'],
												'hist':'2018_T2.png'},

                        {'title':'Physics of Live Systems',
                        'probLink':'files/ipho/2018_Portugal_p3.pdf', 'solLink':'files/ipho/2018_Portugal_p3Sol.pdf',
                        'topics':[],
												'hist':'2018_T3.png'}]
        },


	{ 'year':'2017', 'country':'Indonesia', 'problems':
                        [{'title':'Dark Matter',
                        'probLink':'files/ipho/2017_Indonesia_p1.pdf', 'solLink':'files/ipho/2017_Indonesia_p1Sol.pdf',
                        'topics':[]},

                        {'title':'Earthquake Volcano Tsunami',
                        'probLink':'files/ipho/2017_Indonesia_p2.pdf', 'solLink':'files/ipho/2017_Indonesia_p2Sol.pdf',
                        'topics':[]},

                        {'title':'Cosmic inflation',
                        'probLink':'files/ipho/2017_Indonesia_p3.pdf', 'solLink':'files/ipho/2017_Indonesia_p3Sol.pdf',
                        'topics':[]}]
        },


	{ 'year':'2016', 'country':'Switzerland', 'problems':
                        [{'title':'Two Problems in Mechanics',
                        'probLink':'files/ipho/2016_Switzerland_p1.pdf', 'solLink':'files/ipho/2016_Switzerland_p1Sol.pdf',
                        'topics':[]},

                        {'title':'Nonlin. Dynamics in El-Circ.',
                        'probLink':'files/ipho/2016_Switzerland_p2.pdf', 'solLink':'files/ipho/2016_Switzerland_p2Sol.pdf',
												'jaan':[{'em':'A very nice problem on nonlinear voltage oscillations.'}],
                        'topics':[]},

                        {'title':'Large Hadron Collider',
                        'probLink':'files/ipho/2016_Switzerland_p3.pdf', 'solLink':'files/ipho/2016_Switzerland_p3Sol.pdf',
                        'topics':[],
												'jaan':[{'other':'A good exercise on relativistic dynamics; with part A6 you will learn, once again, that in relativity, you should use momentum instead of speed.'}]}]
        },


	{ 'year':'2015', 'country':'India', 'problems':
			[{'title':'Particles from Sun',
			'probLink':'files/ipho/2015_India_p1.pdf', 'solLink':'files/ipho/2015_India_p1Sol.pdf',
			'topics':[]},

			{'title':'Extremum Principle',
			'probLink':'files/ipho/2015_India_p2.pdf', 'solLink':'files/ipho/2015_India_p2Sol.pdf',
			'topics':[]},

			{'title':'Nuclear Reactor',
			'probLink':'files/ipho/2015_India_p3.pdf', 'solLink':'files/ipho/2015_India_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2014', 'country':'Kazakhstan', 'problems':
			[{'title':'Three Problems',
			'probLink':'files/ipho/2014_Kazakhstan_p1.pdf', 'solLink':'files/ipho/2014_Kazakhstan_p1Sol.pdf',
			'jaan':[{'mech':'Part A - problem on a non-standard conservation law of a momentum-like quantity.','thermo':'Part B - somewhat artificial and non-realistic setup, but still a valid exercise on a polytropic process.','em':'Part C - somewhat artificial and mathematical, but still a useful exercise on a LC-circuit with two degrees of freedom.'}],
			'topics':[]},

			{'title':'Van der Waals',
			'probLink':'files/ipho/2014_Kazakhstan_p2.pdf', 'solLink':'files/ipho/2014_Kazakhstan_p2Sol.pdf',
			'topics':[]},

			{'title':'Gas Discharge',
			'probLink':'files/ipho/2014_Kazakhstan_p3.pdf', 'solLink':'files/ipho/2014_Kazakhstan_p3Sol.pdf',
			'topics':[]}]
	},


	{ 'year':'2013', 'country':'Denmark', 'problems':
			[{'title':'Maribo Meteorite',
			'probLink':'files/ipho/2013_Denmark_p1.pdf', 'solLink':'files/ipho/2013_Denmark_p1Sol.pdf',
			'topics':[],
			'hist':'2013_T1.png'},

			{'title':'Plasmonic Generator',
			'probLink':'files/ipho/2013_Denmark_p2.pdf', 'solLink':'files/ipho/2013_Denmark_p2Sol.pdf',
			'topics':[],
			'hist':'2013_T2.png'},

			{'title':'Greenland Ice',
			'probLink':'files/ipho/2013_Denmark_p3.pdf', 'solLink':'files/ipho/2013_Denmark_p3Sol.pdf',
			'topics':[],
			'hist':'2013_T3.png'}],

			'results_visu_link':'https://www.ioc.ee/~kree/ipho/ipho2013.html'
	},

	{ 'year':'2012' , 'country':'Estonia', 'problems':
			[{'title':'Focus on Scetches',
			'probLink':'files/ipho/2012_Estonia_p1.pdf', 'solLink':'files/ipho/2012_Estonia_p1Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'Part A - will test your physical and mathematical insight (about ballistic motion).',
						'thermo':'Part B - tests your insight into the physics of gas flows (turned out to be surprisingly difficult, with only one full solution among the contestants).',
						'em':'Part C - Dealing with magnetic fields in the presence of superconductors (Q3 is really tricky).'}],
			'hist':'2012_T1.png'},

			{'title':'Kelvin Water Dropper',
			'probLink':'files/ipho/2012_Estonia_p2.pdf', 'solLink':'files/ipho/2012_Estonia_p2Sol.pdf',
			'topics':[],
			'jaan':[{'em':'Tests your understanding of electrostatics (Kelvin water dropper).'}],
			'hist':'2012_T2.png'},

			{'title':'Protostar Formation',
			'probLink':'files/ipho/2012_Estonia_p3.pdf', 'solLink':'files/ipho/2012_Estonia_p3Sol.pdf',
			'topics':[],
			'jaan':[{'thermo':'Q4&Q6 - tests your understanding of the I law of thermodynamics and adiabatic processes (those familiar with standard protostar evolution models need to read the text carefully: the model is slightly modified).'}],
			'hist':'2012_T3.png'}],

			'results_visu_link':'https://www.ioc.ee/~kree/ipho/ipho2012.html'
	},

	{ 'year':'2011' , 'country':'Thailand', 'problems':
			[{'title':'Three-Body Problem',
			'probLink':'files/ipho/2011_Thailand_p1.pdf', 'solLink':'files/ipho/2011_Thailand_p1Sol.pdf',
			'topics':[]},

			{'title':'Electrified Soap Bubble',
			'probLink':'files/ipho/2011_Thailand_p2.pdf', 'solLink':'files/ipho/2011_Thailand_p2Sol.pdf',
			'topics':[]},

			{'title':'Scattering of Ion',
			'probLink':'files/ipho/2011_Thailand_p3.pdf', 'solLink':'files/ipho/2011_Thailand_p3Sol.pdf',
			'topics':[],
			'jaan':[{'em':'Scattering of an ion by an atom (tests your capability of selecting physically appropriate solutions and interpretation of the lack of solutions).'}]}]
	},

	{ 'year':'2010' , 'country':'Croatia', 'problems':
			[{'title':'Image Charge',
			'probLink':'files/ipho/2010_Croatia_p1.pdf', 'solLink':'files/ipho/2010_Croatia_p1Sol.pdf',
			'topics':[]},

			{'title':'Chimney Physics',
			'probLink':'files/ipho/2010_Croatia_p2.pdf', 'solLink':'files/ipho/2010_Croatia_p2Sol.pdf',
			'topics':[]},

			{'title':'Atomic Nucleus',
			'probLink':'files/ipho/2010_Croatia_p3.pdf', 'solLink':'files/ipho/2010_Croatia_p3Sol.pdf',
			'topics':[],
			'jaan':[{'thermo':'A nice problem on chimney physics.'}]}]
	},

	{ 'year':'2009' , 'country':'Mexico', 'problems':
			[{'title':'Earth-Moon System',
			'probLink':'files/ipho/2009_Mexico_p1.pdf', 'solLink':'files/ipho/2009_Mexico_p1Sol.pdf',
			'topics':[]},

			{'title':'Laser Cooling',
			'probLink':'files/ipho/2009_Mexico_p2.pdf', 'solLink':'files/ipho/2009_Mexico_p2Sol.pdf',
			'topics':[]},

			{'title':'Star Size',
			'probLink':'files/ipho/2009_Mexico_p3.pdf', 'solLink':'files/ipho/2009_Mexico_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2008' , 'country':'Vietnam', 'problems':
			[{'title':'Rice Mortar',
			'probLink':'files/ipho/2008_Vietnam_p1.pdf', 'solLink':'files/ipho/2008_Vietnam_p1Sol.pdf',
			'topics':[],
			'hist':'2008_T1.png'},

			{'title':'Cherenkov Light',
			'probLink':'files/ipho/2008_Vietnam_p2.pdf', 'solLink':'files/ipho/2008_Vietnam_p2Sol.pdf',
			'topics':[],
			'hist':'2008_T2.png'},

			{'title':'Atmosphere',
			'probLink':'files/ipho/2008_Vietnam_p3.pdf', 'solLink':'files/ipho/2008_Vietnam_p3Sol.pdf',
			'topics':[],
			'jaan':[{'thermo':'With a mathematical emphasis and with a prescribed approach, but teaching important atmospheric physics (adiabatic atmosphere).'}],
			'hist':'2008_T3.png'}],

			'results_visu_link':'https://www.ioc.ee/~kree/ipho/ipho2008.html'
	},

	{ 'year':'2007' , 'country':'Iran', 'problems':
			[{'title':'Black Hole',
			'probLink':'files/ipho/2007_Iran_p1.pdf', 'solLink':'files/ipho/2007_Iran_p1Sol.pdf',
			'topics':[]},

			{'title':'Air Bag',
			'probLink':'files/ipho/2007_Iran_p2.pdf', 'solLink':'files/ipho/2007_Iran_p2Sol.pdf',
			'topics':[]},

			{'title':'Binary Stars',
			'probLink':'files/ipho/2007_Iran_p3.pdf', 'solLink':'files/ipho/2007_Iran_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2006' , 'country':'Singapore', 'problems':
			[{'title':'Neutron Interferometer',
			'probLink':'files/ipho/2006_Singapore_p1.pdf', 'solLink':'files/ipho/2006_Singapore_p1Sol.pdf',
			'topics':[],
			'jaan':[{'other':'A Machâ€“Zehnder interferometer for neutrons.'}]},

			{'title':'Relativistic Rod',
			'probLink':'files/ipho/2006_Singapore_p2.pdf', 'solLink':'files/ipho/2006_Singapore_p2Sol.pdf',
			'topics':[]},

			{'title':'Four Estimations',
			'probLink':'files/ipho/2006_Singapore_p3.pdf', 'solLink':'files/ipho/2006_Singapore_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2005' , 'country':'Spain', 'problems':
			[{'title':'Satellite',
			'probLink':'files/ipho/2005_Spain_p1.pdf', 'solLink':'files/ipho/2005_Spain_p1Sol.pdf',
			'topics':[]},

			{'title':'Electrical Quantities',
			'probLink':'files/ipho/2005_Spain_p2.pdf', 'solLink':'files/ipho/2005_Spain_p2Sol.pdf',
			'topics':[]},

			{'title':'Neutros in Gravity',
			'probLink':'files/ipho/2005_Spain_p3.pdf', 'solLink':'files/ipho/2005_Spain_p3Sol.pdf',
			'topics':[],
			'jaan':[{'other':'While the whole problem is worth solving, the highlight is the last task (one can guess the right answer quite easily, but doing it properly requires a thorough understanding of the basic quantum mechanics - stationary states and line widths).'}]}]
	},

	{ 'year':'2004' , 'country':'Korea', 'problems':
			[{'title':'Ping-Pong Resistor',
			'probLink':'files/ipho/2004_Korea_p1.pdf', 'solLink':'files/ipho/2004_Korea_p1Sol.pdf',
			'topics':[],
			'jaan':[{'em':'Tests your understanding of electrostatics (ping-ponging disc inside a capacitor).'}]},

			{'title':'Rising Balloon',
			'probLink':'files/ipho/2004_Korea_p2.pdf', 'solLink':'files/ipho/2004_Korea_p2Sol.pdf',
			'topics':[]},

			{'title':'Atomic Microscope',
			'probLink':'files/ipho/2004_Korea_p3.pdf', 'solLink':'files/ipho/2004_Korea_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2003' , 'country':'Taiwan', 'problems':
			[{'title':'Falling Weight',
			'probLink':'files/ipho/2003_Taiwan_p1.pdf', 'solLink':'files/ipho/2003_Taiwan_p1Sol.pdf',
			'topics':[],
			'hist':'2003_T1.png'},

			{'title':'Crystal Resonator',
			'probLink':'files/ipho/2003_Taiwan_p2.pdf', 'solLink':'files/ipho/2003_Taiwan_p2Sol.pdf',
			'topics':[],
			'hist':'2003_T2.png'},

			{'title':'Neutrino / Levitation',
			'probLink':'files/ipho/2003_Taiwan_p3.pdf', 'solLink':'files/ipho/2003_Taiwan_p3Sol.pdf',
			'topics':[],
			'jaan':[{'other':'Part A -  a challenging problem on relativistic dynamics requiring either a lot of experience, or a flash of inspiration. Part B - there are other similar problems, as well (e.g. IPhO-1993-Pr2), but this should be enough to get the idea (of radiation pressure).'}],
			'hist':'2003_T3.png'}],

			'results_visu_link':'https://www.ioc.ee/~kree/ipho/ipho2003.html'
	},

	{ 'year':'2002' , 'country':'Indonesia', 'problems':
			[{'title':'Ground Radar',
			'probLink':'files/ipho/2002_Indonesia_p1.pdf', 'solLink':'files/ipho/2002_Indonesia_p1Sol.pdf',
			'topics':[]},

			{'title':'Predator and Prey',
			'probLink':'files/ipho/2002_Indonesia_p2.pdf', 'solLink':'files/ipho/2002_Indonesia_p2Sol.pdf',
			'topics':[],
			'jaan':[{'em':'teaches dealing with current densities, vector analysis and superposition principle; you can also try to prove the validity of the suggested equivalent circuit (using the method electrical imaging, i.e. constructing the current distribution as a superposition of known valid solutions of the Maxwell equations).'}]},

			{'title':'Inclined Road',
			'probLink':'files/ipho/2002_Indonesia_p3.pdf', 'solLink':'files/ipho/2002_Indonesia_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2001' , 'country':'Turkey', 'problems':
			[{'title':'Four Problems',
			'probLink':'files/ipho/2001_Turkey_p1.pdf', 'solLink':'files/ipho/2001_Turkey_p1Sol.pdf',
			'topics':[]},

			{'title':'Binary Star System',
			'probLink':'files/ipho/2001_Turkey_p2.pdf', 'solLink':'files/ipho/2001_Turkey_p2Sol.pdf',
			'topics':[]},

			{'title':'MHD Generator',
			'probLink':'files/ipho/2001_Turkey_p3.pdf', 'solLink':'files/ipho/2001_Turkey_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'2000' , 'country':'UK', 'problems':
			[{'title':'Five Problems',
			'probLink':'files/ipho/2000_UnitedKingdom_p1.pdf', 'solLink':'files/ipho/2000_UnitedKingdom_p1Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'Q1 - straightforward physically, but teaching useful technical skills (tailoring solutions).'}]},

			{'title':'Cathode Ray Tube',
			'probLink':'files/ipho/2000_UnitedKingdom_p2.pdf', 'solLink':'files/ipho/2000_UnitedKingdom_p2Sol.pdf',
			'topics':[],
			'jaan':[{'em':'an excellent problem on the motion of charged particles in E and B fields.'}]},

			{'title':'Gravitational Waves',
			'probLink':'files/ipho/2000_UnitedKingdom_p3.pdf', 'solLink':'files/ipho/2000_UnitedKingdom_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1999' , 'country':'Italy', 'problems':
			[{'title':'Absorption in Gas',
			'probLink':'files/ipho/1999_Italy_p1.pdf', 'solLink':'files/ipho/1999_Italy_p1Sol.pdf',
			'topics':[]},

			{'title':'Magnetic Field',
			'probLink':'files/ipho/1999_Italy_p2.pdf', 'solLink':'files/ipho/1999_Italy_p2Sol.pdf',
			'topics':[]},

			{'title':'Space Probe',
			'probLink':'files/ipho/1999_Italy_p3.pdf', 'solLink':'files/ipho/1999_Italy_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1998' , 'country':'Iceland', 'problems':
			[{'title':'Rolling Hexagon',
			'probLink':'files/ipho/1998_Iceland_p1.pdf', 'solLink':'files/ipho/1998_Iceland_p1Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'A neat analysis of a rolling pencil.'}]},

			{'title':'Water Under Ice',
			'probLink':'files/ipho/1998_Iceland_p2.pdf', 'solLink':'files/ipho/1998_Iceland_p2Sol.pdf',
			'topics':[],
			'jaan':[{'thermo':'A problem dealing with the basics of mechanics and thermodynamics (ice flow and melting).'}]},

			{'title':'Faster than Light',
			'probLink':'files/ipho/1998_Iceland_p3.pdf', 'solLink':'files/ipho/1998_Iceland_p3Sol.pdf',
			'topics':[],
			'jaan':[{'other':'A simple relativistic analysis of a nice astrophysical effect.'}]}]
	},

	{ 'year':'1997' , 'country':'Canada', 'problems':
			[{'title':'Scalings',
			'probLink':'files/ipho/1997_Canada_p1.pdf', 'solLink':'files/ipho/1997_Canada_p1Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'Q5 - a problem on scaling laws; note: this problem was also on the Physics Olympiad of Soviet Union-1978.'}]},

			{'title':'Nuclear Stability',
			'probLink':'files/ipho/1997_Canada_p2.pdf', 'solLink':'files/ipho/1997_Canada_p2Sol.pdf',
			'topics':[]},

			{'title':'Solar-Powered Aircraft',
			'probLink':'files/ipho/1997_Canada_p3.pdf', 'solLink':'files/ipho/1997_Canada_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1996' , 'country':'Norway', 'problems':
			[{'title':'Five Problems',
			'probLink':'files/ipho/1996_Norway_p1.pdf', 'solLink':'files/ipho/1996_Norway_p1Sol.pdf',
			'topics':[],
			'jaan':[{'em':"Part E - teaches useful tricks with superposition principle (Ampere's law).",'thermo':"Part D - a small but useful exercise (triple-wall-thermos)."}]},

			{'title':'Electron and Cylinders',
			'probLink':'files/ipho/1996_Norway_p2.pdf', 'solLink':'files/ipho/1996_Norway_p2Sol.pdf',
			'topics':[],
			'jaan':[{'em':'teaches how to deal with unusual conservation laws (generalized angular momentum).'}]},

			{'title':'Moon and Tides',
			'probLink':'files/ipho/1996_Norway_p3.pdf', 'solLink':'files/ipho/1996_Norway_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1995' , 'country':'Australia', 'problems':
			[{'title':'Gravitational Red Shift',
			'probLink':'files/ipho/1995_Australia_p1.pdf', 'solLink':'files/ipho/1995_Australia_p1Sol.pdf',
			'topics':[],
			'jaan':[{'other':'Part C - a small exercise on relativistic dynamics (although parts A and B are useful, too, these can be skipped).'}]},

			{'title':'Sound Propagation',
			'probLink':'files/ipho/1995_Australia_p2.pdf', 'solLink':'files/ipho/1995_Australia_p2Sol.pdf',
			'topics':[],
			'jaan':[{'other':'A somewhat mathematical problem on geometrical optics (for sound), with an interesting physics.'}]},

			{'title':'Cylindrical Buoy',
			'probLink':'files/ipho/1995_Australia_p3.pdf', 'solLink':'files/ipho/1995_Australia_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1994' , 'country':'China', 'problems':
			[{'title':'Relativistic Particle',
			'probLink':'files/ipho/1994_China_p1.pdf', 'solLink':'files/ipho/1994_China_p1Sol.pdf',
			'topics':[],
			'jaan':[{'other':'A nice problem on ultrarelativistic particles.'}]},

			{'title':'Superconductor',
			'probLink':'files/ipho/1994_China_p2.pdf', 'solLink':'files/ipho/1994_China_p2Sol.pdf',
			'topics':[],
			'jaan':[{'em':'A nice problem dealing with currents in superconducting circuits.'}]},

			{'title':'Collision of Discs',
			'probLink':'files/ipho/1994_China_p3.pdf', 'solLink':'files/ipho/1994_China_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1993' , 'country':'USA', 'problems':
			[{'title':'Atmospheric Electricity',
			'probLink':'files/ipho/1993_USA_p1.pdf', 'solLink':'files/ipho/1993_USA_p1Sol.pdf',
			'topics':[],
			'jaan':[{'em':'A problem testing your insight in electrostatics and making use of the characteristic time scales (RC).'}]},

			{'title':'Laser Forces',
			'probLink':'files/ipho/1993_USA_p2.pdf', 'solLink':'files/ipho/1993_USA_p2Sol.pdf',
			'topics':[]},

			{'title':'Electron Beam',
			'probLink':'files/ipho/1993_USA_p3.pdf', 'solLink':'files/ipho/1993_USA_p3Sol.pdf',
			'topics':[],
			'jaan':[{'other':'Reaches several important concepts and techniques (electrostatic biprism).'}]}]
	},

	{ 'year':'1992' , 'country':'Finland', 'problems':
			[{'title':'Rotating Satellite',
			'probLink':'files/ipho/1992_Finland_p1.pdf', 'solLink':'files/ipho/1992_Finland_p1Sol.pdf',
			'topics':[]},

			{'title':'Oscillating Molecule',
			'probLink':'files/ipho/1992_Finland_p2.pdf', 'solLink':'files/ipho/1992_Finland_p2Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'Coupled oscillators in a physically meaningful context.'}]},

			{'title':'Satellite in Sunshine',
			'probLink':'files/ipho/1992_Finland_p3.pdf', 'solLink':'files/ipho/1992_Finland_p3Sol.pdf',
			'topics':[],
			'jaan':[{'thermo':"A solid problem on heat radiation with real-life implications (satellite in sunlight)."}]}]
	},

	{ 'year':'1991' , 'country':'Cuba', 'problems':
			[{'title':'Friction on Impact',
			'probLink':'files/ipho/1991_Cuba_p1.pdf', 'solLink':'files/ipho/1991_Cuba_p1Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'This will teach you the basics of the collision of bodies.'}]},

			{'title':'Relativistic Square',
			'probLink':'files/ipho/1991_Cuba_p2.pdf', 'solLink':'files/ipho/1991_Cuba_p2Sol.pdf',
			'topics':[]},

			{'title':'Laser Cooling',
			'probLink':'files/ipho/1991_Cuba_p3.pdf', 'solLink':'files/ipho/1991_Cuba_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1990' , 'country':'Netherlands', 'problems':
			[{'title':'X-ray Diffraction',
			'probLink':'files/ipho/1990_Netherlands_p1.pdf', 'solLink':'files/ipho/1990_Netherlands_p1Sol.pdf',
			'topics':[],
			'jaan':[{'other':'Part D - the basics of Bragg reflection (you can skip parts a, b, and c as these are not needed for solving d).'}]},

			{'title':'Magnetosphere',
			'probLink':'files/ipho/1990_Netherlands_p2.pdf', 'solLink':'files/ipho/1990_Netherlands_p2Sol.pdf',
			'topics':[]},

			{'title':'Rotating Neutron Star',
			'probLink':'files/ipho/1990_Netherlands_p3.pdf', 'solLink':'files/ipho/1990_Netherlands_p3Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'An excellent short problem on rotational dynamics requiring insight.'}]}]
	},

	{ 'year':'1989' , 'country':'Poland', 'problems':
			[{'title':'Boiling Liquids',
			'probLink':'files/ipho/1989_Poland_p1.pdf', 'solLink':'files/ipho/1989_Poland_p1Sol.pdf',
			'topics':[]},

			{'title':'Rotating Masses',
			'probLink':'files/ipho/1989_Poland_p2.pdf', 'solLink':'files/ipho/1989_Poland_p2Sol.pdf',
			'topics':[],
			'jaan':[{'mech':'A a short problem on planetary dynamics requiring mathematical insight.'}]},

			{'title':'Proton Microscope',
			'probLink':'files/ipho/1989_Poland_p3.pdf', 'solLink':'files/ipho/1989_Poland_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1988' , 'country':'Austria', 'problems':
			[{'title':'Particle Velocities',
			'probLink':'files/ipho/1988_Austria_p1.pdf', 'solLink':'files/ipho/1988_Austria_p1Sol.pdf',
			'topics':[]},

			{'title':"Maxwell's Wheel",
			'probLink':'files/ipho/1988_Austria_p2.pdf', 'solLink':'files/ipho/1988_Austria_p2Sol.pdf',
			'topics':[],
			'jaan':[{'mech':"The physics of Maxwell's disc (note that the figure illustrating question 4 is disorienting and the respective official solution is wrong; assuming a long rope, a correct solution is reasonably simple)."}]},

			{'title':'Recombination of Ions',
			'probLink':'files/ipho/1988_Austria_p3.pdf', 'solLink':'files/ipho/1988_Austria_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1987' , 'country':'E Germany', 'problems':
			[{'title':'Ascending Moist Air',
			'probLink':'files/ipho/1987_EGermany_p1.pdf', 'solLink':'files/ipho/1987_EGermany_p1Sol.pdf',
			'topics':[],
			'jaan':[{'thermo':"Not too tricky problem teaching nice physics (raining)."}]},

			{'title':'Electrons in B-field',
			'probLink':'files/ipho/1987_EGermany_p2.pdf', 'solLink':'files/ipho/1987_EGermany_p2Sol.pdf',
			'topics':[]},

			{'title':'Infinite LC-grid',
			'probLink':'files/ipho/1987_EGermany_p3.pdf', 'solLink':'files/ipho/1987_EGermany_p3Sol.pdf',
			'topics':[],
			'jaan':[{'em':'This simple model of waveguides tests your skills of dealing with AC and building electro-mechanical equivalence.'}]}]
	},

	{ 'year':'1986' , 'country':'UK', 'problems':
			[{'title':'Interference',
			'probLink':'files/ipho/1986_UnitedKingdom_p1.pdf', 'solLink':'files/ipho/1986_UnitedKingdom_p1Sol.pdf',
			'topics':[]},

			{'title':'Seismic Waves',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'Masses and Springs',
			'probLink':'files/ipho/1986_UnitedKingdom_p3.pdf', 'solLink':'files/ipho/1986_UnitedKingdom_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1985' , 'country':'Yugoslavia', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[],
			'jaan':[{'em':"Quite straightforward problem, but you'll learn what is the Hall effect."}]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[],
			'jaan':[{'mech':"A problem on Kepler's laws with a real practical significance."}]}]
	},

	{ 'year':'1984' , 'country':'Sweden', 'problems':
			[{'title':'Mirage',
			'probLink':'files/ipho/1984_Sweden_p1.pdf', 'solLink':'files/ipho/1984_Sweden_p1Sol.pdf',
			'topics':[],
			'jaan':[{'other':'A relatively simple problem on geometrical optics (mirage effect).'}]},

			{'title':'Seiching',
			'probLink':'files/ipho/1984_Sweden_p2.pdf', 'solLink':'files/ipho/1984_Sweden_p2Sol.pdf',
			'topics':[],
			'jaan':[{'mech':"Open-ended problem on oscillations dealing with an interesting natural phenomenon (seiches)."}]},

			{'title':'Electrical Filter',
			'probLink':'files/ipho/1984_Sweden_p3.pdf', 'solLink':'files/ipho/1984_Sweden_p3Sol.pdf',
			'topics':[]}]
	},

	{ 'year':'1983' , 'country':'Romania', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'AC Circuit',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1982' , 'country':'W Germany', 'problems':
			[{'title':'Fluorescent Lamp',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'Physical Pendulum',
			'probLink':'', 'solLink':'',
			'topics':[],
			'jaan':[{'mech':"Excellent problem on physical pendulum."}]},

			{'title':'Air Balloon',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1981' , 'country':'Bulgaria', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1979' , 'country':'Soviet U', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1977' , 'country':'Czechoslovakia', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1976' , 'country':'Hungary', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1975' , 'country':'E Germany', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1974' , 'country':'Poland', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1972' , 'country':'Romania', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1971' , 'country':'Bulgaria', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1970' , 'country':'Soviet U', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1969' , 'country':'Czechoslovakia', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1968' , 'country':'Hungary', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},

	{ 'year':'1967' , 'country':'Poland', 'problems':
			[{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]},

			{'title':'',
			'probLink':'', 'solLink':'',
			'topics':[]}]
	},
];

const fs = require('fs');

fs.writeFile('data/ipho.json', JSON.stringify({
	base: 'https://www.ioc.ee/~kree/students/iphoTable/',
	shortName: 'ipho',
	longName: 'Olimpiada Internationala de Fizica',
	values: iphodata
}, undefined, 4), () => undefined);

