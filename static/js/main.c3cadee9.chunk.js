(this.webpackJsonpbraincache=this.webpackJsonpbraincache||[]).push([[0],{20:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var i=t(0),r=t(1),o=t.n(r),n=t(13),s=t.n(n),l=(t(20),t(3));t(21);function c(e){switch(e){case"s":return"10px";case"m":return"20px";case"l":default:return"30px"}}var u=function(e){var a=e.size;return Object(i.jsx)("div",{style:{height:c(a)}})},m=function(e){var a=e.highScore,t=e.onStart;return Object(i.jsxs)("div",{className:"Screen move-into-view",children:[Object(i.jsxs)("div",{id:"title",children:["\ud83e\udde0",Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{style:{color:"#81d2eb"},children:"brain"}),Object(i.jsx)("span",{style:{color:"#65b2c9"},children:"cache"})]})]}),Object(i.jsx)("div",{className:"boxed-text",children:"How many words can you remember?"}),Object(i.jsx)(u,{size:"m"}),Object(i.jsxs)("div",{className:"flex-row",children:["Your best score: ",Object(i.jsx)("span",{className:"level-number-indicator",children:a})]}),Object(i.jsx)(u,{size:"m"}),Object(i.jsx)("div",{className:"boxed-text content",children:Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"Words will appear on the screen."}),Object(i.jsx)("li",{children:"Select the one you haven't seen."}),Object(i.jsx)("li",{children:"Don't select any words that you've seen before, or you'll lose a life."}),Object(i.jsx)("li",{children:" Most people score somewhere between 50 and 200."})]})}),Object(i.jsx)(u,{size:"m"}),Object(i.jsx)("button",{className:"stylish-button menu-button",onClick:t,children:"Start"})]})},d=t(12),p=t.n(d),h=t(14),b=t(4),g=(t(23),function(e){var a=e.shortcut,t=e.word,o=e.correctAnswer,n=e.onSelect,s=e.disabled,c=e.moveOutOfView,u=Object(r.useState)("none"),m=Object(l.a)(u,2),d=m[0],p=m[1];function h(){if(!s){var e=t===o;p(e?"correct":"incorrect"),n(e)}}var b=Object(r.useRef)(h);function g(e){parseInt(e.key)===a&&b.current()}return Object(r.useEffect)((function(){return document.addEventListener("keyup",g),function(){return document.removeEventListener("keyup",g)}}),[]),Object(r.useEffect)((function(){p("none")}),[o]),Object(r.useEffect)((function(){b.current=h,s&&t===o&&"none"===d&&p("actualAnswer"),b.current=h}),[s]),Object(i.jsxs)("button",{disabled:s&&"none"===d,className:"".concat(function(){var e="stylish-button word-button";return"none"===d?e+=" unselected-word":"actualAnswer"===d?e+=" actual-word":(e+=" animate-word-background",e+="correct"===d?" correct-word":" incorrect-word"),s&&(e+=" no-pointer-events"),e}()," \n        ").concat(c?"move-out-of-view":"move-into-view"),onClick:h,children:[t,Object(i.jsx)("div",{className:"word-shortcut-key",children:a})]})}),y=(t(24),function(e){var a=e.level,t=e.moveOutOfView;return Object(i.jsxs)("div",{id:"level-display",children:[Object(i.jsx)("div",{children:"Level"}),Object(i.jsx)("div",{className:"level-number-indicator",children:Object(i.jsx)("div",{className:t?"move-out-of-view":"move-into-view",children:a})})]})}),f=t(5),v=t(6),w=(t(30),"rgb(230, 101, 144)"),j="rgb(220, 220, 220)",k=function(e){var a=e.lives;return Object(i.jsxs)("div",{id:"lives-display",children:[Object(i.jsx)(f.a,{icon:v.a,color:a>0?w:j,size:"lg"}),Object(i.jsx)(f.a,{icon:v.a,color:a>1?w:j,size:"lg"}),Object(i.jsx)(f.a,{className:"life-icon",icon:v.a,color:a>2?w:j,size:"lg"})]})},x=["aardvark","abacus","abandoned","abbey","abbreviation","abduction","abrupt","abstract","absurd","abyss","academic","acceleration","accommodation","accomplishment","accordion","addiction","adrenaline","advantage","aerial","aesthetic","affectionate","aficionado","afterimage","aftermath","age","aggressive","agnostic","agriculture","aimlessness","airport","albatross","album","alchemy","alert","algebra","alibi","alkaline","alphabet","amazement","ambassador","ambidextrous","ambience","ammonia","amount","amphibian","amygdala","analogy","analytically","anarchism","anatomy","anchor","anecdote","angel","annihilation","apathy","apocalypse","apology","apparatus","apple","apricot","aquarium","arachnid","arbitrary","arcade","archery","architecture","area","aroma","arrogance","artificial","ascending","ash","asparagus","asphalt","aspiration","assassinate","assignment","asteroid","astonish","astronomy","asynchronous","athlete","atmosphere","atomic","atrocious","attack","aubergine","audience","augmentation","aurora","authentic","authored","autobiography","automation","autumn","avenue","aviation","avocado","awakening","awareness","awesome","awkwardly","azalea","babbling","baboon","babysitter","bachelorette","backbone","background","backpacking","bacteria","badger","bagel","bakery","balance","ballerina","balloon","bamboo","bang","baptism","barbaric","barefoot","bargain","bashful","basketball","battleaxe","bazaar","beach","beast","beautiful","bebop","becoming","bedazzle","bedbugs","bedlam","beehive","beetroot","befriend","beguile","being","believable","bellowing","bellyache","belonging","benchmark","beneficial","benevolent","bereavement","berserk","bestseller","beverage","biased","biblical","bicarbonate","bickering","bicycle","bidirectional","billboard","binary","binoculars","biochemistry","biodegradable","biped","birdcage","birthplace","blabbermouth","blade","blanket","blasphemy","blessing","blindfold","blissfully","blockbuster","bloodbath","blossom","blueprint","boathouse","bodybuilder","boisterous","bolognese","bookworm","boomerang","borrowing","botanical","bottomless","boulder","bourgeoisie","bracelet","braille","brainstorm","brainwashing","breeze","bumblebee","bureaucracy","butterfly","bystander","cabbage","cache","cacophony","cadaver","caesium","cahoots","calamari","calcification","calculator","calibration","calligraphy","callous","calm","calorie","calypso","camel","camouflage","canal","cancellation","cannibal","canonical","cantaloupe","canvas","capitalism","captivating","caramel","carbon","carefully","cargo","carpenter","cashew","casino","casualty","category","cathedral","cauliflower","causality","caveat","cavern","cedar","celebration","cellular","censorship","centipede","cephalopod","cerebellum","ceremonious","certainty","chainsaw","chameleon","chaotic","chapter","character","charming","chasm","chatterbox","cheapskate","checkmate","cheerfulness","cheese","chemical","chestnut","chew","chickenpox","childish","chimpanzee","chocolate","chuckle","cigarette","cinematography","cinnamon","circuitry","circumnavigate","citizen","civility","clairvoyant","clamshell","classical","claustrophobia","clearly","clementine","cliffhanger","climate","cloudless","clownfish","clue","clumsiness","coagulant","coastline","cobweb","cocoon","coffin","cognition","cohabit","coincidentally","collaborate","column","combination","comfortable","commercial","communication","compass","complexity","compression","computation","concept","condense","confess","consciousness","constellation","controversy","coordination","copper","cornflour","corruption","cortex","cosmos","craftsmanship","creamy","creature","crestfallen","criminal","crisis","crocodile","crossfire","crowdsource","cryptography","crystal","cubist","curfew","curiosity","cushioning","cybersecurity","cylinder","dabble","daffodil","dagger","dahlia","damage","damnation","dangerous","daredevil","darkness","dash","database","daughter","dawdle","daybreak","dazzling","deadpan","deafening","dearly","debatable","debt","decaffeinated","decibel","decipher","dedication","defeated","defensive","defibrillator","definition","deformed","dejected","delay","delirium","demon","denominator","dental","department","derivative","design","desirable","despair","desserts","destruction","detailed","deterioration","determinism","develop","dew","diabolical","diagnosis","dichotomy","dictionary","difference","digital","dim","dingy","diplomat","dirt","disappearance","disconnected","disillusioned","dismay","divided","dizziness","document","dodo","dogma","dolphin","domination","doomsday","doubtful","downhill","doze","dragonfly","dramatic","dreadful","dreamscape","drifting","drowsy","dumbfounded","duplicate","dwindling","dynamic","eagle","eardrum","earth","earthquake","eavesdrop","ebb","eccentric","echelon","echolocation","ecology","edge","educational","eel","effervescent","egalitarian","egg","egocentric","eighteenth","ejection","elaborate","elastic","elbow","election","electricity","elemental","elephant","elsewhere","elusive","emanate","embellishment","ember","embrace","embroidery","emerald","emotion","empathy","empty","enamel","encapsulate","encyclopedia","endless","energy","enlightenment","entirely","entrepreneur","epidemic","epoch","equilibrium","era","erasure","erosion","error","escalator","escape","esoteric","espionage","essentialism","establishment","eternity","ethanol","ethics","etymology","eucalyptus","euphoria","evacuate","evaporation","eventful","eventuality","everyone","evocative","exactly","exaggerate","examination","exceptional","excitement","excruciating","exercise","exfoliate","exhale","expansiveness","experience","explosion","expression","fable","fabric","facet","failure","fantasy","faraway","fashion","fatigue","faultlessness","fauna","fearful","feather","feeble","feet","femininity","fermented","ferryboat","fertile","feud","fewest","fib","fickle","fictional","fidgeting","fighter","figuratively","filmography","filter","financial","fingertips","finite","fireball","firmament","firstborn","fisherman","fishy","fitting","fixture","fizz","flagship","flamboyant","flapjack","flattering","flaw","flesh","flimflam","flirtation","floodlight","floral","fluctuation","fluorescent","flytrap","folder","food","foraging","forbidden","forearms","foresight","formula","fossil","foundation","foxtrot","fractional","fragmentation","fraud","freedom","freethinker","frequency","freshman","friend","fruitless","frustration","functional","fungus","furlough","fuselage","futurology","gain","galaxy","gallery","gambit","gangster","garbage","gateway","gauche","gawk","gazette","geese","gemstone","gene","generation","gentleman","geography","germs","ghostly","giant","giftwrapped","gigabyte","glacier","glamorous","glassworker","globetrotter","gloom","glowing","godfather","gogglebox","goldsmith","googol","gotcha","government","graceful","gradual","grammatically","granite","grasp","gravity","greed","groceries","groggy","groove","grotesque","growth","guestbook","guilt","gumball","guzzle","gymnastics","gyoza","gyrate","habitat","hacker","hacksaw","hadron","haiku","hailstones","hairdresser","halberd","halcyon","hallelujah","halloumi","hallucination","hamburger","hamlet","hamstring","handcrafted","handicap","handkerchief","handwriting","haphazardly","happiness","harmless","harmony","harp","harvest","haste","haunted","haywire","hazelnut","hazmat","headache","headquarters","healing","hearsay","heartbeat","heatwave","heavenly","hectic","hedonistic","hefty","heirloom","helicopter","hemisphere","herbivore","herculean","heroic","hesitation","hexagonal","hiatus","hibernation","hideaway","hieroglyph","highway","hippocampus","hipster","history","hodgepodge","holistically","hologram","homesickness","honesty","hoodwinked","hopefulness","hopscotch","horizontal","hotheaded","hourglass","hovercraft","humanoid","humiliation","hummingbird","hybrid","hydrangea","hydrolysis","hygiene","hymn","hyperbole","hypnotic","hypothesis","hysteria","iceberg","icosahedron","idea","identity","ideology","idiotic","idol","igloo","illegal","illumination","illustrator","imagery","imagination","imitate","immaterial","immersed","immortality","impact","impala","impatience","impervious","impressionism","improve","improvisation","inaction","inanimate","incentive","inception","inchworm","incoherent","index","inertia","infamous","infestation","infrastructure","inheritance","inkblot","innovation","institution","interconnectedness","interlude","introspection","involuntarily","ion","iridescent","irony","irrational","island","isolation","itch","itself","ivory","jackal","jacket","jade","jagged","jam","janitor","javelin","jazz","jettison","jewel","jigsaw","jinxed","joblessness","jogger","jostle","journalist","joy","joyride","judgement","juggling","jumpsuit","justification","juvenile","juxtaposition","kaleidoscope","kamikaze","kangaroo","karate","katana","kayak","kebab","keepsake","ketchup","keyboard","khaki","kickboxing","kidnapped","kill","kilogram","kindergarten","kingdom","kinship","kiss","kleptomaniac","klutz","kneecap","knighthood","knockoff","knowledge","kraken","label","laboratory","labyrinth","lackadaisical","lacquer","lagoon","lakeside","lamentation","landfill","landmine","language","lantern","lateral","laughter","laurel","lavender","lawn","lawyer","lazy","leadership","leapfrog","leathery","legend","legitimacy","legumes","leisure","lemongrass","leopard","lethargic","letterbox","level","levitation","lexical","liberty","lifeblood","lifeguard","lightning","limelight","limitless","linear","linguistically","liquid","literature","llama","lobster","locational","lockdown","locomotive","logarithmic","logic","loophole","lovestruck","loyalty","lucid","luggage","lullaby","lumberjack","luminary","lunatic","lurking","luxury","lynx","lyrics","macabre","macadamia","macaroni","machinations","macho","madness","maelstrom","maestro","mage","maggot","magma","magnetism","magnificent","magnolia","mahogany","mainland","malfunction","malice","mammalian","manageable","maniacal","manifestation","manifold","mannerisms","mansion","mantra","maple","marathon","marinara","maritime","marriage","martyr","mascot","masculinity","masterful","materialism","mathematical","mattress","meaninglessness","measurement","mechanism","medallion","medieval","medium","megahertz","melancholy","mellow","melodrama","melt","memento","mentorship","merchandise","mercurial","merge","meringue","merlot","mermaid","messiah","metabolism","metaphysics","meteor","microbiology","microcosm","midpoint","midshipman","migration","milestone","milkshake","millennium","mindless","mineral","miniature","minimalist","miraculous","mirror","miscalculation","misleading","misrepresentation","mitochondria","mnemonic","mockingbird","mockumentary","modernity","modular","moisture","molecular","momentary","monarchy","moneybags","monkey","monochrome","monopoly","month","moonlight","morals","morbid","morning","moss","motherboard","motivation","mouldable","mountains","moustache","mozzarella","mudbath","muffin","multicellular","multiplication","munchkin","murky","murmur","muscular","mushroom","musician","musketeer","mutiny","mycelium","myriad","mystery","mythology","nachos","naked","namesake","nanotechnology","napkin","narcissism","nationality","nature","navigation","naysayer","nearsightedness","nebulous","necklace","necropolis","nefarious","negativity","nephew","nepotism","nervousness","nest","network","neuroscientist","neutrality","neutrino","newsflash","newt","nibble","niche","nightfall","nihilist","nimble","nirvana","nitpick","nitrogen","noble","nocturnal","noggin","noise","nomad","nomination","nonessential","nonprofit","noodles","noon","normal","northwest","nostalgia","notebook","notification","notorious","nourish","novelist","noxious","nozzle","nuanced","nuclear","nugget","number","nurse","nutcase","nutritious","nymph","oak","oasis","obedience","obelisk","object","obligation","oblivious","oboe","obscene","obscurity","observatory","obsession","obtuse","ocarina","occupation","oceanographer","octagonal","octave","oddball","offbeat","offensive","offshore","ogre","ohmmeter","oil","ointment","okay","older","oligarch","olive","olympiad","omelette","ominous","omission","omniscience","one","onion","onomatopoeia","onslaught","onward","onyx","oomph","opacity","opal","opera","opinionated","opportunistic","oppression","optical","optimist","oracle","orangutan","orbit","orchard","orchestra","ordinarily","organelle","orientation","origami","origin","ornithology","orphan","orthodox","oscillation","osmosis","ostentatious","ostrich","otherworldly","ottoman","outbreak","outlandish","outpaced","outspoken","overachiever","overcrowded","overprotective","overseer","overwhelming","owl","ownership","oxygen","oxymoron","oyster","ozone","pacemaker","pacifist","package","pact","padlock","pageant","painful","paintball","painting","palatable","paleontologist","palette","palm","pamphlet","panacea","pancake","pancreas","pandora","panic","pantomime","paparazzi","paperclip","parabolic","paradise","paradox","parallelogram","parasite","parenthood","parrot","particle","partner","pastel","patchwork","pathogen","pathologist","pattern","pause","pawn","peace","peachy","pearl","pebbles","pedantic","pedestrian","peekaboo","peerless","pegasus","penalty","pencil","penmanship","penultimate","people","peppermint","percentage","perceptiveness","percussion","perennial","perfectionism","peripheral","perish","periwinkle","permafrost","permutation","perpendicular","perpetual","perplexed","perseverance","personality","personification","persuasive","pesky","petal","petroleum","phantom","pharaoh","phenomenon","philanthropy","philosophy","phobia","phoenix","phosphorous","photograph","photosynthesis","phrase","physiological","piano","pickpocket","picnic","picturesque","piecemeal","pigeonhole","pigment","pilgrimage","pinball","pink","pinstripe","pioneer","pipeline","pipette","pipsqueak","pirate","pitch","pitfall","pivotal","pixelation","pizza","placid","plague","planet","plankton","plasma","plastic","plateau","platform","plausible","playground","pleasing","pledge","pliers","plothole","plum","plural","plywood","pneumonia","podium","podzol","poetic","poignant","pointlessness","polarity","political","polyglot","polygon","ponder","popularity","porcelain","porcupine","portfolio","portmanteau","possibility","postbox","postmodernism","potato","potential","potion","powder","powerless","pragmatic","praiseworthy","prayer","preference","prehistoric","prejudice","preparation","pressure","priceless","primal","princess","priority","privacy","probabilistic","procedural","profession","profound","programmatically","progressive","prologue","promenade","promise","pronunciation","proofread","prophet","protection","protest","prototype","pseudoscience","psychoanalysis","publicity","pudding","pulp","pulsate","pumpkin","punctuation","puppeteer","purgatory","purpose","puzzle","pyjamas","pyramid","pyromaniac","quadrant","quaint","qualification","quarantine","quark","quarrel","quasi","qubit","queendom","quench","questionable","quicksilver","quiet","quilt","quintessential","quintillion","quirk","quitter","quiz","quote","rabbit","race","radar","radiation","radius","ragamuffin","ragtime","raid","railway","rainfall","rainforest","raisin","ramble","ramen","rampage","ranch","randomness","ransom","rapport","rare","rational","rattlesnake","ravenous","raw","razor","reactive","readership","realism","reappear","rearrange","reasonable","rebuke","recklessness","recognition","recommendation","reconcile","recruit","recursion","recyclable","redemption","redwood","referendum","reflux","refrigerator","refugee","refusal","regret","rehabilitation","rejection","relationship","relaxation","religion","reminisce","remorseful","renaissance","renew","repeatedly","replacement","repossess","reprehensible","representation","reptile","repulsive","resemble","residential","resistance","resonate","respect","restart","restoration","resurrection","retaliation","retina","retrospectively","revenge","revolutionary","rewrite","rhapsody","rhetoric","rheumatology","rhinoceros","rhododendron","rhombus","rhubarb","rhythm","ribbon","rice","riddle","rift","rightmost","rigorous","ringtone","riot","risk","ritual","riverbank","roadkill","robotic","rocket","rodeo","rogue","rollercoaster","romance","rook","rooster","rosemary","rotor","roughness","roundabout","royalty","rubber","rudimentary","ruin","rupture","rural","rust","ruthless","rye","sabbatical","sabotage","saccharine","sacred","sacrilege","saddening","sadistic","safari","safekeeping","sage","sailboat","saintly","salamander","salient","salmon","salsa","salty","salvage","sample","sanctimonious","sandalwood","sandstorm","sapling","sapphire","sarsaparilla","sassy","satellite","satire","saturation","sauna","savagely","sawtooth","saxophonist","scaffolding","scallywag","scandal","scapegoat","scarecrow","scathing","scenery","schadenfreude","schematic","schizophrenia","scholar","schoolboy","scientific","scope","scoundrel","scratch","screenplay","scribble","scrutiny","seafarer","seance","seatbelt","secretive","secular","segment","seismograph","selective","semantics","semiconductor","senate","sensationalism","sensitive","sentience","sentimental","septuplet","sequence","sequoia","serpentine","service","severe","shabby","shadow","shaman","shamrock","shapeless","sharpener","sheep","shelter","shield","shimmering","shock","shoelaces","shoplifter","shortcut","shortsightedness","shoulder","shriek","shroud","shuttle","sickening","sidekick","siege","sigh","sightseeing","signal","significant","silence","silicon","silky","similarities","simplistic","simulation","simultaneous","singsong","singularity","sinister","siren","sisterhood","situation","skateboard","skeleton","sketch","skirmish","skylark","slack","slalom","slapstick","sledgehammer","sleepyhead","sleuth","slogan","sloth","smartypants","smile","smithereens","smog","smooth","smudged","smuggler","snail","snapshot","sneaky","sneeze","snippet","snobbish","snooze","snowboarding","soapbox","sober","society","soda","soil","solace","soldier","solemn","solidarity","soliloquy","someone","somersault","songbook","soon","sophistry","soprano","sorcerer","sorrow","soulful","sourdough","southern","sovereignty","soya","spaceship","spaghetti","spam","sparkle","spatula","specialty","spectrogram","speechless","spellchecker","spherical","spicy","spiral","spirituality","spokesperson","spoon","spotlight","springboard","squabble","square","squirrel","stability","staircase","stamina","standard","starlight","station","steadfast","stench","stethoscope","stigma","stipulation","stockholder","stomach","stopwatch","story","straightforward","stranded","strategy","strawberry","strobe","stronghold","studiousness","stupor","stylish","suave","subjective","sublime","subscription","substance","suburbanite","success","suddenly","sudoku","sugar","sultana","sunbathe","superficial","superhuman","supernatural","supernova","supposedly","surface","surgical","survival","suspicious","swan","sweet","swift","syllable","symbiotic","symbol","symmetry","sympathetic","synergy","synopsis","synthesis","syrup","system","taco","tadpole","tailbone","tailor","takeaway","talent","talisman","talkative","tambourine","tangerine","tapestry","tarantula","tariff","tasteless","tattoo","tautology","tavern","taxidermy","tea","teamwork","technology","teleportation","telescope","telltale","temporal","tenacity","tension","tenure","tepid","terraforming","terrain","territorial","terror","tessellation","texture","thankful","thaw","theme","theoretical","thermodynamics","thirst","thistle","thorn","thought","thread","thunderstorm","thwarted","thyme","tickle","tides","tigress","timber","time","tinsel","tiramisu","titanic","toadstool","toboggan","toe","togetherness","tolerance","tomahawk","tomato","tomb","tomfoolery","tongue","topography","torchbearer","tornado","tortoiseshell","totalitarian","tourism","towering","toxicology","trace","tradition","tragic","traitor","trampoline","tranquil","transcendent","transformation","transistor","transparent","trapdoor","trapezoid","traveller","treacherous","treasure","tree","trek","trespasser","tribalism","trillionaire","trombone","troublemaker","trout","trustworthy","tsunami","tumbleweed","tunnel","turbine","turquoise","tusks","twang","typewriter","typhoon","tyrant","ubiquitous","ultimatum","ultraviolet","umami","umbilical","umbrella","umpteenth","unacceptable","unaccustomed","unamused","unavoidable","unbelievable","uncontrollable","undecided","underground","understanding","unearthed","uneventful","unfold","unforgettable","uniform","unimportant","unique","unity","universe","unprecedented","unrealistic","unruly","unwieldy","unwittingly","upbringing","upgrade","upholstery","uplifting","uproar","uranium","urchin","urgency","usefulness","username","usher","usurp","utilitarianism","utopia","vacation","vaccine","vacuum","vagabond","validation","valley","valve","vampire","vandalism","vanish","variety","vast","vault","vector","vegetarian","vehicle","vein","veldt","velociraptor","velvet","veneer","venom","ventriloquist","verbose","vermilion","versatile","vertebrate","vertigo","vexed","vial","vibrant","vicarious","video","viewpoint","vigilante","villain","vinegar","vintage","vinyl","violin","viper","virtual","virtuoso","visage","visionary","vitamin","vivid","vocabulary","voice","volcano","volition","volume","volunteering","voodoo","vortex","voyage","vulnerable","vulture","wacky","waffle","wager","waistcoat","wakeboarding","wakefulness","walrus","waltz","wanderlust","wannabe","warehouse","warning","wasabi","wasp","wasteful","watchdog","waterproof","wavelength","wax","wayfaring","wealth","weary","weatherman","website","weedkiller","weep","weightlessness","weird","werewolf","whale","wheelbarrow","whereabouts","whippersnapper","whirlpool","whistleblower","wholeheartedly","wiggle","wildfire","window","wineglass","wingspan","winter","wireless","wish","wispy","wistful","witch","withdrawn","wizard","wonderland","woodpecker","workaholic","workflow","worm","worrisome","worship","worthless","wrath","wrestle","wrongdoing","xylophone","yacht","yardstick","yawn","yearbook","yellow","yesterday","yodel","yoga","yogurt","yonder","youth","zany","zapped","zealous","zebra","zeitgeist","zero","zest","zigzag","zipper","zombie","zoologist","zoom","zucchini","zygote"];function O(e){return Math.floor(Math.random()*e.length)}var z={sleep:function(e){return new Promise((function(a){return setTimeout(a,e)}))},randomIndexFrom:O,randomItemFrom:function(e){return e[O(e)]},shuffle:function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e}},q="Select the new word.",S="Nice!",N="You've seen that before.",E=document.documentElement,I={seen:[],unseen:Object(b.a)(x)},M={currentLevel:0,wordOptions:[],correctAnswer:""},A=function(e){var a=e.onGameEnd,t=Object(r.useState)(I),o=Object(l.a)(t,2),n=o[0],s=o[1],c=Object(r.useState)((function(){return Q(!0)})),m=Object(l.a)(c,2),d=m[0],f=m[1],v=Object(r.useState)(3),w=Object(l.a)(v,2),j=w[0],x=w[1],O=Object(r.useState)(q),A=Object(l.a)(O,2),L=A[0],F=A[1],W=Object(r.useState)(0),C=Object(l.a)(W,2),Y=C[0],H=C[1],P=Object(r.useState)(!1),V=Object(l.a)(P,2),G=V[0],R=V[1],J=Object(r.useState)(!1),U=Object(l.a)(J,2),B=U[0],D=U[1];function T(e){D(!0),e?F(S):(F(N),x((function(e){return e-1}))),H((function(a){return e?a+1:0})),function(e){return K.apply(this,arguments)}(e).then((function(){s((function(e){return{seen:[].concat(Object(b.a)(e.seen),[d.correctAnswer]),unseen:e.unseen.filter((function(e){return!d.wordOptions.includes(e)}))}}))}))}function K(){return(K=Object(h.a)(p.a.mark((function e(a){var t,i,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=X(a),i=Object(l.a)(t,2),r=i[0],o=i[1],E.style.setProperty("--word-sweep-duration","".concat(o,"ms")),e.next=4,z.sleep(r);case 4:return R(!0),e.next=7,z.sleep(o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(){var e,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=z.randomItemFrom(n.unseen);switch(n.seen.length){case 0:e=[t,null,null];break;case 1:var i=z.shuffle([n.seen[0],t]);e=[].concat(Object(b.a)(i),[null]);break;default:var r=z.randomIndexFrom(n.seen),o=Object(b.a)(n.seen);o.splice(r,1);var s=z.randomItemFrom(o);e=z.shuffle([n.seen[r],s,t])}return{currentLevel:a?1:d.currentLevel+1,wordOptions:e,correctAnswer:t}}function X(e){var a=1600,t=400;if(e){var i=Math.pow(1.25,Y);a=1e3+600/i,t=250+150/i}return[a,t]}return Object(r.useEffect)((function(){n!==I&&(j>0&&n.unseen.length>0?f(Q()):a({score:d.currentLevel,isMaxScore:0===n.unseen.length,seenWords:n.seen}))}),[n]),Object(r.useEffect)((function(){d!==M&&(R(!1),D(!1),F(q),document.activeElement.blur(),1===d.currentLevel&&E.style.setProperty("--word-shortcut-visibility","hidden"))}),[d]),Object(i.jsxs)("div",{className:"Screen",children:[Object(i.jsx)(y,{level:d.currentLevel,moveOutOfView:G}),Object(i.jsx)(u,{}),Object(i.jsx)(k,{lives:j}),Object(i.jsx)(u,{}),d.wordOptions.map((function(e,a){return Object(i.jsx)(g,{shortcut:a+1,word:e,correctAnswer:d.correctAnswer,onSelect:T,disabled:B||null===e,moveOutOfView:G},a)})),Object(i.jsx)(u,{}),Object(i.jsx)("div",{className:"boxed-text",children:L})]})},L=(t(31),function(e){var a=e.score,t=e.isMaxScore,o=e.previousHighScore,n=e.seenWords,s=e.onRestart,c=Object(r.useState)(!1),m=Object(l.a)(c,2),d=m[0],p=m[1],h=Object(i.jsx)("div",{className:"boxed-text",children:"Game over!"});t&&(h=Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"boxed-text",children:"You... win?"}),Object(i.jsx)(u,{size:"m"}),Object(i.jsx)("div",{className:"boxed-text content",children:"You've seen every single word. Wow! I was pretty sure that was impossible. If you seriously just did this, you have great power. Use it wisely."})]}));var g="Your score:";return a>o&&(g="New high score!"),Object(i.jsxs)("div",{className:"Screen move-into-view",children:[Object(i.jsx)("h1",{id:"title",children:"\ud83d\udc4f"}),h,Object(i.jsx)(u,{size:"m"}),Object(i.jsxs)("div",{className:"flex-row",children:[g," ",Object(i.jsx)("span",{className:"level-number-indicator",children:a})]}),Object(i.jsx)(u,{size:"m"}),Object(i.jsx)("button",{className:"stylish-button menu-button",onClick:s,children:"Play Again"}),Object(i.jsx)("button",{className:"stylish-button menu-button",onClick:function(){return window.location.reload()},children:"Home"}),!d&&Object(i.jsx)("button",{className:"stylish-button menu-button",onClick:function(){return p(!0)},children:"Check Words"}),d&&Object(i.jsxs)("div",{id:"end-word-list",children:[Object(i.jsx)("div",{id:"end-word-list-title",children:"You saw..."}),Object(b.a)(n).sort().map((function(e,a){return Object(i.jsx)("p",{className:"end-word-list-item",children:e},a)}))]})]})});var F=function(){var e,a,t=Object(r.useState)("start"),o=Object(l.a)(t,2),n=o[0],s=o[1],c=Object(r.useState)(null!==(e=localStorage.getItem("highScore"))&&void 0!==e?e:0),u=Object(l.a)(c,2),d=u[0],p=u[1],h=Object(r.useState)(0),b=Object(l.a)(h,2),g=b[0],y=b[1],w=Object(r.useState)(),j=Object(l.a)(w,2),k=j[0],x=j[1];switch(n){case"start":a=Object(i.jsx)(m,{highScore:d,onStart:function(){return s("game")}});break;case"game":a=Object(i.jsx)(A,{onGameEnd:function(e){x(e),function(e){var a,t=null!==(a=localStorage.getItem("highScore"))&&void 0!==a?a:0;y(t),e>t&&(localStorage.setItem("highScore",e),p(e))}(e.score),s("end")}});break;case"end":a=Object(i.jsx)(L,{score:k.score,isMaxScore:k.isMaxScore,previousHighScore:g,seenWords:k.seenWords,onRestart:function(){return s("game")}});break;default:throw new Error("Unknown screen requested ".concat(n,"!"))}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"App",children:a}),Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("div",{children:"by mangonaise"}),Object(i.jsx)(f.a,{icon:v.a,color:"rgb(230, 101, 144)"}),Object(i.jsx)("a",{href:"https://github.com/mangonaise/word-memory-game",children:"github"})]})]})};s.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c3cadee9.chunk.js.map