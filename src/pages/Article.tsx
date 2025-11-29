import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import bloodFlowDiagram from "@/assets/blood-flow-diagram.png";
import heartAnatomy from "@/assets/heart-anatomy.jpeg";

const Article = () => {
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
                10 min read
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
            {/* Section 1: Introduction to Heart Structure - with heart anatomy image */}
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
                    Blood flow through the heart follows a specific pathway. Oxygen-poor blood enters the right atrium from the body, then moves to the right ventricle, which pumps it to the lungs for oxygenation. Once oxygen-rich, the blood returns to the left atrium, flows into the left ventricle, and is then pumped out to the rest of the body. This coordinated movement is facilitated by heart valves, which act as gates to prevent backflow and ensure that blood moves in one direction.
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
              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  These components are intricately designed, and any disruption in their function can lead to conditions such as congestive heart failure (CHF). CHF occurs when the heart cannot pump blood effectively, leading to inadequate blood flow to meet the body's needs. Understanding the basic structure and function of the heart sets the stage for exploring how the heart pumps blood and the mechanisms behind its efficient operation.
                </p>
              </div>
            </section>

            {/* Section 2: Mechanism of Heart Pumping - with blood flow diagram */}
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
                    The heart works in two main phases called systole and diastole, which happen with every heartbeat. During systole, the heart contracts, or squeezes, to push blood out. The right side of the heart sends blood to the lungs to pick up oxygen, while the left side pumps oxygen-rich blood to the rest of the body.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This squeezing action is carefully timed by tiny electrical signals from the heart's natural pacemaker, called the sinoatrial (SA) node, which keeps the heartbeat regular and steady. When the heart contracts properly, it makes sure that enough blood reaches all parts of the body.
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-muted/30 rounded-xl border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  After the squeezing phase, the heart enters diastole, which is the relaxing phase. In this stage, the heart muscles loosen up, and blood flows back into the heart from the body and the lungs. This gives the heart time to refill with blood before it pumps again. Although diastole might sound like a rest period, it's just as important as systole since without enough time to relax and refill, the heart wouldn't have enough blood to pump out in the next beat. Together, these two phases—systole (contracting) and diastole (relaxing)—keep blood moving smoothly through the body and make sure every organ gets the oxygen and nutrients it needs to stay healthy.
                </p>
              </div>
            </section>

            {/* Section 3: Understanding CHF */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">3</span>
                Understanding Congestive Heart Failure (CHF)
              </h2>
              <div className="bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded-xl p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-destructive">Key Point:</strong> When the mechanisms of heart pumping are disrupted, as seen in conditions like congestive heart failure (CHF), the heart struggles to pump enough blood. This leads to various complications and symptoms that can significantly affect a person's quality of life.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Congestive heart failure (CHF) is a chronic condition where the heart's ability to pump blood is impaired, leading to insufficient blood flow to meet the body's needs. This condition can manifest in two primary forms: systolic and diastolic heart failure. Systolic heart failure occurs when the heart muscle cannot contract effectively, reducing the amount of blood pumped out with each heartbeat. In contrast, diastolic heart failure happens when the heart muscle becomes stiff and cannot relax properly, leading to inadequate filling of the heart chambers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The prevalence of CHF is significant, affecting millions worldwide, particularly older adults. Various risk factors contribute to the development of this condition, including hypertension, diabetes, obesity, and coronary artery disease. Lifestyle choices, such as poor diet, lack of exercise, and smoking, further increase the risk.
              </p>
            </section>

            {/* Section 4: Causes */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                Causes of Congestive Heart Failure
              </h2>
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Coronary Artery Disease</h3>
                  <p className="text-sm text-muted-foreground">Arteries supplying blood to the heart become narrowed or blocked, reducing blood flow and leading to heart muscle damage.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Hypertension</h3>
                  <p className="text-sm text-muted-foreground">High blood pressure forces the heart to work harder, leading to structural changes like thickening of the heart muscle.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Valvular Disease</h3>
                  <p className="text-sm text-muted-foreground">Damaged heart valves disrupt normal blood flow and cause the heart to compensate by pumping harder.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Symptoms */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">5</span>
                Symptoms of Congestive Heart Failure
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Shortness of Breath</strong>
                    <p className="text-muted-foreground mt-1">Can occur during physical activities or even while resting, as the heart struggles to pump enough oxygen-rich blood to the body.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Fatigue</strong>
                    <p className="text-muted-foreground mt-1">Unusual tiredness or lack of energy due to insufficient blood flow and oxygen delivery to muscles and organs.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Edema (Swelling)</strong>
                    <p className="text-muted-foreground mt-1">Fluid accumulation in legs, abdomen, or other areas when the heart fails to pump blood efficiently.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 6: Diagnosis */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">6</span>
                Diagnosis of Congestive Heart Failure
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-foreground mb-2 text-lg">Echocardiogram (ECHO)</h3>
                  <p className="text-muted-foreground">Uses ultrasound technology to create moving images of the heart, allowing doctors to assess how efficiently it pumps blood and check the condition of chambers and valves.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-foreground mb-2 text-lg">Chest X-ray</h3>
                  <p className="text-muted-foreground">Can show if the heart is larger than normal—a condition known as cardiomegaly that often accompanies heart failure.</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed p-5 bg-muted/30 rounded-xl">
                Early detection of CHF is important because it can lead to better management and treatment options. Recognizing the signs of heart failure in its initial stages can help patients avoid severe complications.
              </p>
            </section>

            {/* Section 7: Treatment */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">7</span>
                Management and Treatment of CHF
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Management and treatment of congestive heart failure focus on relieving symptoms, improving heart function, and enhancing quality of life. A combination of lifestyle changes and medications is often the first line of defense. Patients are encouraged to adopt a heart-healthy lifestyle, which includes regular physical activity, a balanced diet low in sodium, and maintaining a healthy weight.
              </p>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 mb-6">
                <h3 className="font-bold text-foreground mb-4 text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Common Medications
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-background/50 rounded-xl">
                    <strong className="text-foreground">ACE Inhibitors</strong>
                    <p className="text-muted-foreground text-sm mt-1">Help relax blood vessels, making it easier for the heart to pump blood throughout the body. They lower blood pressure and reduce strain on the heart by blocking certain chemicals that cause blood vessels to tighten.</p>
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
                In addition to medication, patients are usually advised to <strong className="text-foreground">limit salt (sodium) intake</strong>, as too much salt can cause the body to retain water and put extra pressure on the heart.
              </p>
              <p className="text-muted-foreground leading-relaxed p-5 bg-muted/30 rounded-xl">
                In some cases, when medications and lifestyle changes do not provide enough relief, surgical options may be considered. Procedures such as valve repair or replacement, coronary artery bypass grafting, or even heart transplantation can be necessary to restore proper heart function.
              </p>
            </section>

            {/* References */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">References</h2>
              <div className="bg-muted/50 rounded-2xl p-8 text-sm text-muted-foreground space-y-3 border border-border">
                <p>Xu, J., et al. (2024). Prevalence and modifiable risk factors of cognitive frailty in patients with chronic heart failure in China. BMC Cardiovascular Disorders.</p>
                <p>Rathore, M. (2022). Congestive heart failure. International Journal of Advance Research in Nursing.</p>
                <p>Santiago, G. G., et al. (2023). Review of best treatment option in heart failure 2023. International Journal of Advances in Medicine.</p>
                <p>Ali, A., et al. (2018). American Heart Association High Blood Pressure Protocol 2017. Cureus.</p>
                <p>Nichols, G. A., et al. (2001). Congestive Heart Failure in Type 2 Diabetes. Diabetes Care.</p>
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
