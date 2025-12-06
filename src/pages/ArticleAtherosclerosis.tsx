import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Clock, BookOpen, AlertTriangle, Activity, Utensils, Dumbbell, Ban, Pill, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import atherosclerosisDiagram from "@/assets/atherosclerosis-diagram.png";
import hypertensionDiagram from "@/assets/hypertension-diagram.png";
import heartLogo from "@/assets/heart-logo.png";

const ArticleAtherosclerosis = () => {
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
              <img src={heartLogo} alt="Heart Logo" className="w-10 h-10 object-contain mix-blend-multiply" />
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
              Part 2 - Published
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              The Pressure & the Plaque
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              Understanding Atherosclerosis: Causes, Impact on Blood Pressure, and Prevention Strategies
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                6 sections
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
            {/* Introduction */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  The heart functions as a muscular pump that circulates blood through the body in a coordinated cycle of contraction and relaxation. In each heartbeat, the heart's chambers squeeze (systole) to propel oxygen-rich blood out to the body and send oxygen-poor blood to the lungs, then relax (diastole) to refill with blood for the next beat. This pumping mechanism maintains vital blood flow, ensuring tissues receive oxygen and nutrients. However, healthy circulation depends not only on the heart's pumping but also on the condition of the arteries that carry the blood. If those blood vessels become narrowed or hardened as occurs in atherosclerosis, the heart must work harder to push blood through, potentially leading to higher blood pressure and other cardiovascular problems.
                </p>
              </div>
            </section>

            {/* Section 1: What Is Atherosclerosis? */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                What Is Atherosclerosis?
              </h2>
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Atherosclerosis is the gradual buildup of plaque inside the walls of arteries. Plaque consists of fats, cholesterol, calcium, and other substances that stick to the arterial lining, causing the arteries to become thicker, hardened, and less flexible (often referred to as "hardening of the arteries") (Cleveland Clinic, 2024). Typically, the process begins with damage to the artery's inner lining, after which cholesterol and other materials deposit at the site. The body's immune system responds, leading to chronic inflammation in the artery wall.
                  </p>
                  <div className="p-6 bg-muted/30 rounded-xl border border-border mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">In simpler terms:</strong> Atherosclerosis isn't just fat clogging the arteries—it is an active inflammatory process in the vessel wall. Over years, the plaque can grow larger and protrude into the arterial channel (lumen), gradually narrowing the passage for blood. Early on, this process is usually silent; most people don't experience noticeable symptoms until an artery is significantly narrowed or blocked.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border shadow-lg">
                  <img 
                    src={atherosclerosisDiagram} 
                    alt="Atherosclerosis diagram showing normal artery vs artery with plaque buildup, and progression from formation to growth and rupture to blood clot" 
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-4 font-medium">
                    Figure 1: Atherosclerosis progression - from normal artery to plaque formation and blood clot (Cleveland Clinic, 2024)
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded-xl p-6">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-destructive flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    Critical Danger
                  </strong>
                  A major danger is that a plaque can sometimes rupture (or its surface can erode), causing a blood clot to form on top of the plaque narrowing the lumen further. A clot can suddenly obstruct blood flow, much like a barricade in a narrowed road, triggering a medical emergency. Depending on where this occurs, the result might be a <strong>heart attack</strong> (if an artery supplying the heart is blocked) or a <strong>stroke</strong> (if an artery to the brain is blocked).
                </p>
              </div>
              <div className="mt-6 p-6 bg-card rounded-xl border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  In fact, atherosclerosis underlies many of these life-threatening events and is extremely common. Studies estimate that about <strong className="text-foreground">half of middle-aged adults</strong> have some atherosclerotic plaque without knowing it, and the complications of plaque buildup including heart attacks and strokes, are among the leading causes of death worldwide (Cleveland Clinic, 2024). In Western countries, roughly <strong className="text-foreground">50% of all deaths</strong> can be traced back to diseases caused by atherosclerosis (Pahwa & Jialal, 2023).
                </p>
              </div>
            </section>

            {/* Section 2: Causes and Risk Factors */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">2</span>
                Causes and Risk Factors of Atherosclerosis
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Atherosclerosis is a multifactorial disease, meaning it has many contributing causes. It often starts with damage to the endothelium, the delicate inner lining of the artery. Once the endothelial lining is injured, it becomes easier for cholesterol to enter the artery wall and form plaques. There are several key risk factors and lifestyle habits that can injure arteries and set the stage for plaque development (Mayo Clinic Staff, 2024):
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Unhealthy Cholesterol Levels</h3>
                  <p className="text-sm text-muted-foreground">High levels of LDL ("bad") cholesterol and triglycerides in the blood greatly increase plaque formation. Excess LDL infiltrates the artery wall and is a primary fuel for atherosclerotic plaque. Low levels of HDL ("good") cholesterol (which helps clear cholesterol from arteries) can also heighten risk.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">High Blood Pressure (Hypertension)</h3>
                  <p className="text-sm text-muted-foreground">Chronic high blood pressure puts mechanical stress on artery walls. Over time, this pressure can damage the endothelium, making arteries more susceptible to plaque buildup. Hypertension is one of the most common risk factors for atherosclerosis (Pahwa & Jialal, 2023).</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center mb-4">
                    <Ban className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Smoking and Tobacco Use</h3>
                  <p className="text-sm text-muted-foreground">Chemicals in tobacco smoke directly harm the blood vessels. Smoking causes inflammation and constriction of arteries, and it accelerates the development of plaque.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Pill className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Diabetes and Insulin Resistance</h3>
                  <p className="text-sm text-muted-foreground">High blood sugar in diabetes can damage the vascular lining and contribute to inflammation. Diabetic individuals often have higher triglycerides and lower HDL, creating a combination of risk factors that significantly hasten atherosclerosis.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Dumbbell className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Obesity and Physical Inactivity</h3>
                  <p className="text-sm text-muted-foreground">A sedentary lifestyle and excess body weight are associated with higher blood pressure, abnormal cholesterol levels, and insulin resistance, all of which promote plaque formation.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Family History and Age</h3>
                  <p className="text-sm text-muted-foreground">Genetics also play a role. A family history of early heart disease or stroke suggests a predisposition to atherosclerosis.</p>
                </div>
              </div>
            </section>

            {/* Section 3: How Atherosclerosis Contributes to Hypertension */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">3</span>
                How Atherosclerosis Contributes to Hypertension
              </h2>
              <div className="grid lg:grid-cols-2 gap-10 items-start mb-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Atherosclerosis doesn't just result from high blood pressure; it can also <strong className="text-foreground">contribute to high blood pressure</strong>. As plaque deposits accumulate, arteries lose their elasticity and their internal diameter narrows. Healthy arteries are somewhat flexible and expand with each heartbeat. But in atherosclerosis, the arteries become stiffened and less able to widen when blood is pumped through.
                  </p>
                  <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                    <p className="text-muted-foreground leading-relaxed">
                      This loss of arterial flexibility means the heart must exert more force to push blood forward, leading to higher pressure within the vessels, especially the systolic (pumping) blood pressure (Kim & Jo, 2024). <strong className="text-foreground">In simple terms, hardened arteries create more resistance, so blood pressure rises as if one were pumping through a smaller, more rigid pipe.</strong>
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/30 rounded-2xl p-6 border border-border shadow-lg">
                  <img 
                    src={hypertensionDiagram} 
                    alt="Hypertension diagram showing force of blood on artery wall, with systolic number (130+) when heart contracts and diastolic number (80+) when heart rests" 
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                  <p className="text-sm text-muted-foreground text-center mt-4 font-medium">
                    Figure 2: Hypertension - Understanding blood pressure readings (Cleveland Clinic, 2025)
                  </p>
                </div>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl border border-border mb-6">
                <h3 className="font-bold text-foreground mb-3">Renal Artery Stenosis Example</h3>
                <p className="text-muted-foreground leading-relaxed">
                  An example of atherosclerosis-induced hypertension is renal artery stenosis, the narrowing of arteries that supply the kidneys. The kidneys play a crucial role in blood pressure regulation. If plaque significantly narrows a kidney artery, the reduced blood flow tricks the kidney into thinking blood pressure is too low, prompting it to release hormones that raise blood pressure throughout the body. As a result, atherosclerosis in the renal arteries can lead to secondary hypertension (high blood pressure caused by another condition). Atherosclerosis is the most common cause of renal artery stenosis and the resultant hard-to-control blood pressure (Cleveland Clinic, 2024).
                </p>
              </div>
              <div className="mt-6 bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded-xl p-6">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-destructive">The Feedback Loop:</strong> Conversely, longstanding high blood pressure accelerates atherosclerosis, creating a feedback loop. The continuous stress of hypertension further damages arterial walls, making plaque formation more likely and more rapid (Hollander, 1976). Together, atherosclerosis and hypertension form a dangerous cycle that can progressively worsen cardiovascular health.
                </p>
              </div>
            </section>

            {/* Section 4: Effects and Complications */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                Effects and Complications of Atherosclerosis
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Because atherosclerosis can affect arteries throughout the body, it can lead to a wide range of cardiovascular problems:
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Coronary Artery Disease and Heart Attacks</strong>
                    <p className="text-muted-foreground mt-1">When atherosclerosis affects the coronary arteries (the arteries supplying the heart muscle), it is called coronary artery disease. Reduced blood flow can cause angina (chest pain) and, if a plaque ruptures or a vessel becomes blocked, a heart attack.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Carotid Artery Disease and Stroke</strong>
                    <p className="text-muted-foreground mt-1">Atherosclerosis in the carotid arteries of the neck can lead to strokes or transient ischemic attacks (TIAs).</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Peripheral Artery Disease (PAD)</strong>
                    <p className="text-muted-foreground mt-1">This refers to atherosclerosis in arteries of the limbs. PAD can cause pain in the calves or thighs during walking and lead to poor wound healing and tissue death in extreme cases.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Aneurysms</strong>
                    <p className="text-muted-foreground mt-1">Atherosclerosis can weaken the wall of an artery, leading to a bulging out of that wall called an aneurysm. A ruptured aneurysm is life-threatening.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Arrhythmia</strong>
                    <p className="text-muted-foreground mt-1">Irregular heartbeat can occur due to poor blood flow to the heart due to narrowed blood vessels.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Chronic Kidney Disease</strong>
                    <p className="text-muted-foreground mt-1">Plaque in the renal arteries can reduce blood flow to the kidneys. This can impair kidney function and lead to chronic kidney disease.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="text-foreground text-lg">Dementia</strong>
                    <p className="text-muted-foreground mt-1">Reduced blood flow to the brain can also lead to dementia.</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6 p-5 bg-muted/30 rounded-xl">
                Therefore, atherosclerosis interferes with normal blood circulation, and the consequences depend on which arteries are affected. The broad impact of atherosclerosis on health underscores why it is a leading cause of mortality worldwide.
              </p>
            </section>

            {/* Section 5: Prevention Strategies */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">5</span>
                Prevention Strategies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The following prevention strategies are widely recommended (Mayo Clinic Staff, 2024):
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Utensils className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Heart-Healthy Diet</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Rich in fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit intake of saturated fats, trans fats, cholesterol, added sugars, and salt.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <Dumbbell className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Regular Exercise</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">At least 150 minutes of moderate aerobic exercise per week.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Maintain a Healthy Weight</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Achieve and maintain a healthy body weight.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Ban className="w-5 h-5 text-destructive" />
                    <h3 className="font-bold text-foreground">Don't Smoke</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Avoid smoking and all tobacco products.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Control Blood Pressure & Blood Sugar</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Work with healthcare providers to manage these conditions.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Pill className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Manage Cholesterol</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Keep LDL cholesterol low with diet, exercise, or medications if needed. Statins are commonly prescribed to manage cholesterol.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <h3 className="font-bold text-foreground">Manage Stress</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Practice relaxation techniques like deep breathing or yoga, as stress can temporarily increase blood pressure.</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-card to-muted/20 rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Moon className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Get Quality Sleep</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Adults should aim for 7 to 9 hours of good sleep per night, as poor sleep can increase the risk of heart disease.</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-xl">
                <p className="text-muted-foreground leading-relaxed">
                  By adopting a heart-healthy lifestyle early and consistently, individuals can greatly lower their risk of developing atherosclerosis and its complications.
                </p>
              </div>
            </section>

            {/* Section 6: References */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">References</h2>
              <div className="bg-muted/50 rounded-2xl p-8 text-sm text-muted-foreground space-y-3 border border-border">
                <p>Cleveland Clinic. (2024). Atherosclerosis: Symptoms, Causes & Treatment. Retrieved from <a href="https://my.clevelandclinic.org/health/diseases/16753-atherosclerosis-arterial-disease" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://my.clevelandclinic.org/health/diseases/16753-atherosclerosis-arterial-disease</a></p>
                <p>Hollander, W. (1976). Role of hypertension in atherosclerosis and cardiovascular disease. <em>The American journal of cardiology, 38</em>(6), 786–800. <a href="https://doi.org/10.1016/0002-9149(76)90357-x" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/0002-9149(76)90357-x</a></p>
                <p>Kim, H. L., & Jo, S. H. (2024). Arterial stiffness and heart failure with preserved ejection fraction. <em>Journal of Korean Medical Science, 39</em>, e195. <a href="https://doi.org/10.3346/jkms.2024.39.e195" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.3346/jkms.2024.39.e195</a></p>
                <p>Mayo Clinic Staff. (2024). Arteriosclerosis / atherosclerosis – Symptoms and causes. Retrieved from <a href="https://www.mayoclinic.org/diseases-conditions/arteriosclerosis-atherosclerosis/symptoms-causes/syc-20350569" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.mayoclinic.org/diseases-conditions/arteriosclerosis-atherosclerosis/symptoms-causes/syc-20350569</a></p>
                <p>Pahwa, R., & Jialal, I. (2023). Atherosclerosis. In StatPearls. StatPearls Publishing. Retrieved from <a href="https://www.ncbi.nlm.nih.gov/books/NBK507799/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/books/NBK507799/</a></p>
              </div>
            </section>
          </div>

          {/* Back to Articles */}
          <div className="mt-16 pt-8 border-t border-border text-center">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/#articles">
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

export default ArticleAtherosclerosis;
