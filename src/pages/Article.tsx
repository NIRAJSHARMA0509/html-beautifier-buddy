import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bloodFlowDiagram from "@/assets/blood-flow-diagram.png";
import heartAnatomy from "@/assets/heart-anatomy.jpeg";

const Article = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link to="/" className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="font-bold text-lg text-foreground">Arav Chopra</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Article Hero */}
      <header className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <Badge variant="default" className="mb-4 uppercase tracking-wider">
              Part 1 - Published
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Heart's Blueprint
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Understanding basic structure, function, and an introduction to Congestive Heart Failure (CHF).
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                7 sections
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Introduction to Heart Structure */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                    Introduction to Heart Structure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The heart, a remarkable organ, serves as the center of the circulatory system, responsible for directing blood flow throughout the body. Understanding heart anatomy is essential to grasping how it functions. The heart consists of four chambers: the right and left atria at the top and the right and left ventricles at the bottom. These chambers work together to ensure that blood circulates efficiently.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Blood flow through the heart follows a specific pathway. Oxygen-poor blood enters the right atrium from the body via superior and inferior vena cava, then moves to the right ventricle, which pumps it to the lungs for oxygenation. After oxygen enrichment, the blood returns to the left atrium, flows into the left ventricle, and is then pumped out to the rest of the body. This coordinated movement is facilitated by heart valves, which act as gates to prevent backflow and ensure that blood moves in one direction.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border shadow-lg">
                  <img 
                    src={heartAnatomy} 
                    alt="Detailed heart anatomy showing chambers and valves" 
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-4 font-medium">
                    Figure 1: Detailed anatomy of the heart showing chambers and valves
                  </p>
                </div>
              </div>
              
              {/* Heart Components Table */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse bg-card rounded-xl overflow-hidden border border-border">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="px-6 py-4 text-left font-bold text-foreground border-b border-border">Right Side</th>
                      <th className="px-6 py-4 text-left font-bold text-foreground border-b border-border">Left Side</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="px-6 py-3">Right Atrium</td>
                      <td className="px-6 py-3">Left Atrium</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-muted/20">
                      <td className="px-6 py-3">Tricuspid AV Valve</td>
                      <td className="px-6 py-3">Bicuspid (Mitral) AV Valve</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-6 py-3">Right Ventricle</td>
                      <td className="px-6 py-3">Left Ventricle</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-muted/20">
                      <td className="px-6 py-3">Pulmonary Semilunar Valve</td>
                      <td className="px-6 py-3">Aortic Semilunar Valve</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="px-6 py-3">Pulmonary Arteries</td>
                      <td className="px-6 py-3">Aorta</td>
                    </tr>
                    <tr className="bg-muted/20">
                      <td className="px-6 py-3">Superior & Inferior Vena Cava</td>
                      <td className="px-6 py-3">Pulmonary Veins</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  These components are intricately designed, and any disruption in their function can lead to conditions such as congestive heart failure (CHF). CHF occurs when the heart cannot pump blood effectively, leading to inadequate blood flow and oxygenation to meet the body's needs. Understanding the basic structure and function of the heart sets the stage for exploring how the heart pumps blood and the mechanisms behind its efficient operation. This knowledge is vital for addressing heart-related health issues and improving treatment options.
                </p>
              </div>
            </section>

            {/* Section 2: Mechanism of Heart Pumping */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border shadow-lg order-2 lg:order-1">
                  <img 
                    src={bloodFlowDiagram} 
                    alt="Blood flow diagram showing the pathway through heart chambers" 
                    className="w-full h-auto rounded-xl"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-4 font-medium">
                    Figure 2: Blood flow pathway through the heart chambers
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">2</span>
                    Mechanism of Heart Pumping
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The heart works in two main phases called systole and diastole, which happen with every heartbeat. During systole, the heart contracts, or squeezes, to push blood out. The right side of the heart sends oxygen-poor blood to the lungs to enrich with oxygen, while the left side pumps oxygen-rich blood to the rest of the body.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This squeezing action is carefully timed by tiny electrical signals from the heart's natural pacemaker, called the sinoatrial (SA) node, which keeps the heartbeat regular and steady. When the heart contracts properly, it makes sure that enough blood reaches all parts of the body.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After the squeezing phase, the heart enters diastole, which is the relaxing phase. In this stage, the heart muscles relax, loosen up, and blood flows back into the heart from the rest of the body (on the right-hand side of the heart) and the lungs (on the left-hand side of the heart). This gives the heart time to refill with blood before it pumps again. Although diastole might sound like a rest period, it's just as important as systole since without enough time to relax and refill, the heart wouldn't have enough blood to pump out in the next beat.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Together, these two phases—systole (contracting) and diastole (relaxing)—keep blood moving smoothly through the body and make sure every organ gets the oxygen and nutrients it needs to stay healthy.
                </p>
              </div>
              <div className="mt-6 bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded-xl p-6">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-destructive">Important:</strong> However, when the mechanisms of heart pumping are disrupted, as seen in conditions like congestive heart failure (CHF), the heart struggles to fill and pump enough blood. This leads to symptoms like fatigue, shortness of breath and various complications like kidney, liver damage, heart valve problems and irregular heart beats—symptoms that can significantly affect a person's quality of life.
                </p>
              </div>
            </section>

            {/* Section 3: Understanding CHF */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">3</span>
                Understanding Congestive Heart Failure (CHF)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Congestive heart failure (CHF) is a chronic condition where the heart's ability to pump blood is impaired, leading to insufficient blood flow to meet the body's needs. This condition can manifest in two primary forms: systolic and diastolic heart failure. Systolic heart failure occurs when the heart muscle cannot contract effectively, reducing the amount of blood pumped out with each heartbeat. In contrast, diastolic heart failure happens when the heart muscle becomes stiff and cannot relax properly, leading to inadequate filling of the heart chambers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The prevalence of CHF is significant, affecting millions worldwide, particularly older adults. Various risk factors contribute to the development of this condition, including hypertension, diabetes, obesity, and coronary artery disease. Lifestyle choices, such as poor diet, lack of exercise, and smoking, further increase the risk. Understanding these risk factors is crucial for early identification and management, as addressing them can help slow the progression of CHF.
              </p>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <p className="text-muted-foreground leading-relaxed">
                  As CHF progresses, it can lead to additional complications, including <strong className="text-foreground">cognitive frailty</strong>, which impacts not only physical health but also mental well-being. The interplay between heart failure and cognitive decline highlights the multifaceted challenges faced by patients. Recognizing the complexity of CHF sets the stage for exploring its causes, which are varied and can range from lifestyle factors to underlying medical conditions that necessitate a comprehensive approach to treatment and management.
                </p>
              </div>
            </section>

            {/* Section 4: Causes */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                Causes of Congestive Heart Failure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Congestive heart failure (CHF) can arise from various underlying conditions, with coronary artery disease and hypertension being among the most common contributors.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Coronary Artery Disease</h3>
                  <p className="text-sm text-muted-foreground">Occurs when the arteries supplying blood to the heart become narrowed or blocked, reducing blood flow and leading to heart muscle damage. This damage can weaken the heart's ability to pump blood effectively, resulting in heart failure over time.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Hypertension</h3>
                  <p className="text-sm text-muted-foreground">When blood pressure remains consistently high, it forces the heart to work harder to circulate blood. This increased workload can lead to changes in the heart's structure, such as thickening of the heart muscle, which may ultimately compromise its function.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Valvular Heart Disease</h3>
                  <p className="text-sm text-muted-foreground">Involves damage to one or more heart valves, which can disrupt normal blood flow and lead to heart strain. When the valves do not open or close properly, the heart must compensate by pumping harder, which can lead to heart failure over time.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed p-5 bg-muted/30 rounded-xl">
                Understanding these causes is crucial as they lay the groundwork for recognizing the symptoms that manifest as the heart's ability to function declines. Symptoms of CHF often reflect the body's struggle to cope with inadequate blood flow, highlighting the importance of early detection and management.
              </p>
            </section>

            {/* Section 5: Symptoms */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">5</span>
                Symptoms of Congestive Heart Failure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Symptoms of congestive heart failure (CHF) can greatly affect an individual's quality of life. Recognizing these symptoms is essential for timely intervention.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Shortness of Breath</strong>
                    <p className="text-muted-foreground mt-1">One of the most common signs. This can occur during physical activities or even while resting, as the heart struggles to pump enough oxygen-rich blood to the body. As the condition progresses, individuals may find it increasingly difficult to breathe, especially when lying down, which can lead to discomfort and anxiety.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Fatigue</strong>
                    <p className="text-muted-foreground mt-1">Individuals may feel unusually tired or lacking in energy, as their bodies are not receiving adequate blood flow. This fatigue can make daily tasks feel overwhelming and diminish one's overall motivation. The heart's inability to pump effectively leads to insufficient oxygen delivery to muscles and organs, further contributing to feelings of exhaustion.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Edema (Swelling)</strong>
                    <p className="text-muted-foreground mt-1">Swelling in the legs, abdomen, or other areas of the body. When the heart fails to pump blood efficiently, fluid can accumulate in various tissues, causing noticeable swelling. This can lead to discomfort and may hinder movement.</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6 p-5 bg-muted/30 rounded-xl">
                Understanding how CHF manifests can help in seeking appropriate medical care. The next step involves diagnosing this condition, which can be done through various medical assessments and tests tailored to evaluate heart function.
              </p>
            </section>

            {/* Section 6: Diagnosis */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">6</span>
                Diagnosis of Congestive Heart Failure
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-foreground mb-2 text-lg">Echocardiography (ECHO)</h3>
                  <p className="text-muted-foreground">One of the primary diagnostic tools. This test uses ultrasound technology to create moving images of the heart, allowing doctors to assess how efficiently it pumps blood and to check the condition of the heart chambers and valves. In simpler terms, it lets medical professionals watch the heart in action and identify if any part is enlarged or not working as it should.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-foreground mb-2 text-lg">Chest X-ray</h3>
                  <p className="text-muted-foreground">Can show if the heart is larger than normal—a condition known as cardiomegaly that often accompanies heart failure. Together with ECHO, these imaging techniques give doctors a detailed understanding of the heart's structure and performance, making it easier to diagnose CHF accurately.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <h3 className="font-bold text-foreground mb-2 text-lg">Electrocardiography (ECG)</h3>
                  <p className="text-muted-foreground">Maps the heart's electrical activity to check its rhythm and can show evidence of past heart damage caused by coronary artery disease or chamber enlargement.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <h3 className="font-bold text-foreground mb-2 text-lg">Blood Tests</h3>
                  <p className="text-muted-foreground">Complete blood count (CBC) can reveal anemia, which can worsen heart failure. Also includes measurement of kidney or thyroid issues, and levels of natriuretic peptides (BNP), a protein that increases with heart failure.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed p-5 bg-muted/30 rounded-xl">
                Early detection of CHF is important because it can lead to better management and treatment options. Recognizing the signs of heart failure in its initial stages can help patients avoid severe complications. Once diagnosed, a comprehensive management plan can be developed, focusing on lifestyle changes and medical interventions to support heart function. This proactive approach to care is essential in improving outcomes for those living with CHF.
              </p>
            </section>

            {/* Section 7: Treatment */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">7</span>
                Management and Treatment of CHF
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Management and treatment of congestive heart failure (CHF) focus on relieving symptoms, improving heart function, and enhancing quality of life. A combination of lifestyle changes and medications is often the first line of defense. Patients are encouraged to adopt a heart-healthy lifestyle, which includes regular physical activity, a balanced diet low in sodium, and maintaining a healthy weight. These changes can help ease the heart's workload and improve overall well-being.
              </p>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 mb-6">
                <h3 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Common Medications
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-xl">
                    <strong className="text-foreground">ACE Inhibitors (Angiotensin Converting Enzyme)</strong>
                    <p className="text-muted-foreground text-sm mt-1">Help relax blood vessels, making it easier for the heart to pump blood throughout the body. In simpler terms, they dilate blood vessels, which lowers blood pressure, improves return of blood to heart and reduce strain on the heart by blocking certain chemicals that cause blood vessels to tighten.</p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border-l-4 border-amber-500">
                    <strong className="text-foreground">Beta-blockers</strong>
                    <p className="text-muted-foreground text-sm mt-1">May be prescribed in some cases to slow the heart rate and lessen the heart's workload, <em className="text-amber-600 font-medium">but they are used carefully, since in some patients they can make heart failure symptoms worse.</em></p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl">
                    <strong className="text-foreground">Diuretics</strong>
                    <p className="text-muted-foreground text-sm mt-1">Often called "water tablets," help the body get rid of extra salt and fluid, which reduces swelling and makes breathing easier.</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In addition to medication, patients are usually advised to <strong className="text-foreground">limit salt (sodium) intake</strong>, as too much salt can cause the body to retain water and put extra pressure on the heart. Together, these treatments aim to help the heart work more efficiently and improve overall quality of life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 p-5 bg-muted/30 rounded-xl">
                In some cases, when medications and lifestyle changes do not provide enough relief, surgical options may be considered. Procedures such as valve repair or replacement, coronary artery bypass grafting, or even heart transplantation can be necessary to restore proper heart function.
              </p>
              <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-xl">
                <p className="text-muted-foreground leading-relaxed">
                  Overall, effective management of CHF requires a <strong className="text-foreground">personalized approach</strong>, considering the individual's specific needs and health status. With early diagnosis and a proactive treatment plan, many people with CHF can lead fulfilling lives. Understanding the heart's structure and function is key to recognizing the importance of these interventions to maintain heart health.
                </p>
              </div>
            </section>

            {/* References */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">References</h2>
              <div className="bg-muted/50 rounded-2xl p-8 text-sm text-muted-foreground space-y-3 border border-border">
                <p>Ali, A., Zar, M. A., Kamal, A., Faquih, A. E., Bhan, C., Iftikhar, W., Malik, M., Ahmad, M. Q., Ali, N. S., Sami, S. A., Jitidhar, F., Cheema, A., & Zulfiqar, A. (2018). American Heart Association high blood pressure protocol 2017: A literature review. <em>Cureus, 10</em>(8), e3230. <a href="https://doi.org/10.7759/cureus.3230" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.7759/cureus.3230</a></p>
                <p>Cleveland Clinic. (n.d.). Blood flow through the heart. <em>Cleveland Clinic</em>. <a href="https://my.clevelandclinic.org/health/articles/17060-how-does-the-blood-flow-through-your-heart" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://my.clevelandclinic.org/health/articles/17060-how-does-the-blood-flow-through-your-heart</a></p>
                <p>Nichols, G. A., Hillier, T. A., Erbey, J. R., & Brown, J. B. (2001). Congestive heart failure in type 2 diabetes: Prevalence, incidence, and risk factors. <em>Diabetes Care, 24</em>(9), 1614–1619. <a href="https://doi.org/10.2337/diacare.24.9.1614" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.2337/diacare.24.9.1614</a></p>
                <p>Rathore, M. (2022). Congestive heart failure. <em>International Journal of Advance Research in Nursing, 5</em>(1), 226. <a href="https://doi.org/10.33545/nursing.2022.v5.i1a.226" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.33545/nursing.2022.v5.i1a.226</a></p>
                <p>Santiago, G. G., Gomez, A. M., Gonzalez, G. A., Ramos, O. J. L., Castro, A. A., & Pere, M. B. L. (2023). Review of best treatment option in heart failure 2023. <em>International Journal of Advances in Medicine, 10</em>(12), 3512. <a href="https://doi.org/10.18203/2349-3933.ijam20233512" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.18203/2349-3933.ijam20233512</a></p>
                <p>Xu, J., Xiang, L., Zhang, H., Sun, X., Xu, D., Wu, D., Chen, C., Zhang, Y., & Gu, Z. (2024). Prevalence and modifiable risk factors of cognitive frailty in patients with chronic heart failure in China: A cross-sectional study. <em>BMC Cardiovascular Disorders, 24</em>, 753. <a href="https://doi.org/10.1186/s12872-024-03753-x" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1186/s12872-024-03753-x</a></p>
              </div>
            </section>
          </div>

          {/* Back to Articles */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Arav Chopra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Article;