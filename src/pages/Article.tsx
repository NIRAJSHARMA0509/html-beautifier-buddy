import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-lg text-foreground">Arav Chopra</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 text-center animate-fade-in-up">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Fundamentals
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Introduction to Heart Structure
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding the heart's anatomy, how it pumps blood, and what happens when this mechanism fails.
            </p>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1: Introduction to Heart Structure */}
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Introduction to Heart Structure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The heart, a remarkable organ, serves as the center of the circulatory system, responsible for directing blood flow throughout the body. Understanding heart anatomy is essential to grasping how it functions. The heart consists of four chambers: the right and left atria at the top and the right and left ventricles at the bottom. These chambers work together to ensure that blood circulates efficiently.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Blood flow through the heart follows a specific pathway. Oxygen-poor blood enters the right atrium from the body, then moves to the right ventricle, which pumps it to the lungs for oxygenation. Once oxygen-rich, the blood returns to the left atrium, flows into the left ventricle, and is then pumped out to the rest of the body. This coordinated movement is facilitated by heart valves, which act as gates to prevent backflow and ensure that blood moves in one direction.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <img 
                    src={bloodFlowDiagram} 
                    alt="Blood flow diagram showing the pathway through heart chambers" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Figure 1: Blood flow pathway through the heart chambers
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6">
                These components are intricately designed, and any disruption in their function can lead to conditions such as congestive heart failure (CHF). CHF occurs when the heart cannot pump blood effectively, leading to inadequate blood flow to meet the body's needs. Understanding the basic structure and function of the heart sets the stage for exploring how the heart pumps blood and the mechanisms behind its efficient operation.
              </p>
            </section>

            {/* Section 2: Mechanism of Heart Pumping */}
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="order-2 lg:order-1 bg-card rounded-xl p-4 border border-border">
                  <img 
                    src={heartAnatomy} 
                    alt="Detailed heart anatomy showing chambers and valves" 
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Figure 2: Detailed anatomy of the heart showing chambers and valves
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
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
              <p className="text-muted-foreground leading-relaxed mt-6">
                After the squeezing phase, the heart enters diastole, which is the relaxing phase. In this stage, the heart muscles loosen up, and blood flows back into the heart from the body and the lungs. This gives the heart time to refill with blood before it pumps again. Although diastole might sound like a rest period, it's just as important as systole since without enough time to relax and refill, the heart wouldn't have enough blood to pump out in the next beat. Together, these two phases—systole (contracting) and diastole (relaxing)—keep blood moving smoothly through the body and make sure every organ gets the oxygen and nutrients it needs to stay healthy.
              </p>
            </section>

            {/* Section 3: Understanding CHF */}
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                Understanding Congestive Heart Failure (CHF)
              </h2>
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong>Key Point:</strong> When the mechanisms of heart pumping are disrupted, as seen in conditions like congestive heart failure (CHF), the heart struggles to pump enough blood. This leads to various complications and symptoms that can significantly affect a person's quality of life.
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
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">4</span>
                Causes of Congestive Heart Failure
              </h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-2">Coronary Artery Disease</h3>
                  <p className="text-sm text-muted-foreground">Arteries supplying blood to the heart become narrowed or blocked, reducing blood flow.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-2">Hypertension</h3>
                  <p className="text-sm text-muted-foreground">High blood pressure forces the heart to work harder, leading to structural changes.</p>
                </div>
                <div className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-2">Valvular Disease</h3>
                  <p className="text-sm text-muted-foreground">Damaged heart valves disrupt normal blood flow and cause heart strain.</p>
                </div>
              </div>
            </section>

            {/* Section 5: Symptoms */}
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">5</span>
                Symptoms of Congestive Heart Failure
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground">Shortness of Breath:</strong>
                    <span className="text-muted-foreground"> Can occur during physical activities or even while resting, as the heart struggles to pump enough oxygen-rich blood.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground">Fatigue:</strong>
                    <span className="text-muted-foreground"> Unusual tiredness or lack of energy due to insufficient blood flow and oxygen delivery to muscles and organs.</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground">Edema (Swelling):</strong>
                    <span className="text-muted-foreground"> Fluid accumulation in legs, abdomen, or other areas when the heart fails to pump blood efficiently.</span>
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 6: Diagnosis */}
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">6</span>
                Diagnosis of Congestive Heart Failure
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                One of the primary diagnostic tools for CHF is the <strong className="text-foreground">echocardiogram (ECHO)</strong>. This test uses ultrasound technology to create moving images of the heart, allowing doctors to assess how efficiently it pumps blood and to check the condition of the heart chambers and valves.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Another useful test is the <strong className="text-foreground">chest X-ray</strong>, which can show if the heart is larger than normal—a condition known as cardiomegaly that often accompanies heart failure. Together, these imaging techniques give doctors a detailed understanding of the heart's structure and performance, making it easier to diagnose CHF accurately.
              </p>
            </section>

            {/* Section 7: Treatment */}
            <section className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">7</span>
                Management and Treatment of CHF
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Management and treatment of congestive heart failure focus on relieving symptoms, improving heart function, and enhancing quality of life. A combination of lifestyle changes and medications is often the first line of defense. Patients are encouraged to adopt a heart-healthy lifestyle, which includes regular physical activity, a balanced diet low in sodium, and maintaining a healthy weight.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-foreground mb-3">Common Medications:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">ACE Inhibitors:</strong> Help relax blood vessels, making it easier for the heart to pump blood.</li>
                  <li><strong className="text-foreground">Beta-blockers:</strong> Slow the heart rate and lessen the heart's workload.</li>
                  <li><strong className="text-foreground">Diuretics:</strong> Help the body get rid of extra salt and fluid, reducing swelling.</li>
                </ul>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                In some cases, when medications and lifestyle changes do not provide enough relief, surgical options may be considered. Procedures such as valve repair or replacement, coronary artery bypass grafting, or even heart transplantation can be necessary to restore proper heart function.
              </p>
            </section>

            {/* References */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">References</h2>
              <div className="bg-muted/50 rounded-xl p-6 text-sm text-muted-foreground space-y-2">
                <p>Xu, J., et al. (2024). Prevalence and modifiable risk factors of cognitive frailty in patients with chronic heart failure in China. BMC Cardiovascular Disorders.</p>
                <p>Rathore, M. (2022). Congestive heart failure. International Journal of Advance Research in Nursing.</p>
                <p>Santiago, G. G., et al. (2023). Review of best treatment option in heart failure 2023. International Journal of Advances in Medicine.</p>
                <p>Ali, A., et al. (2018). American Heart Association High Blood Pressure Protocol 2017. Cureus.</p>
                <p>Nichols, G. A., et al. (2001). Congestive Heart Failure in Type 2 Diabetes. Diabetes Care.</p>
              </div>
            </section>
          </div>

          {/* Back to Articles */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <Button asChild size="lg">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Articles
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Arav Chopra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Article;
