import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Clock, BookOpen, AlertTriangle, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import siteLogo from "@/assets/logo-arav-chopra.svg";

const ArticleSupplyDemand = () => {
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
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img src={siteLogo} alt="Arav Chopra - Heart Health" className="h-10 w-auto" />
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
              Part 3 - Published
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Supply, Demand, & MI
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              How Reduced Blood Flow and Increased Cardiac Workload Lead to Myocardial Infarction
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
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 mb-8">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The heart is a muscular organ that works continuously throughout life and depends on a steady supply of oxygen to meet its energy demands. Unlike skeletal muscles, which work when in action can temporarily reduce activity when oxygen levels fall, the heart must work continuously to pump without interruption. For this reason, maintaining a balance between myocardial oxygen supply and oxygen demand is critical. When this balance is disrupted, particularly when demand exceeds supply, the heart muscle becomes ischemic. If ischemia is severe or prolonged, it can progress to myocardial infarction (MI), commonly referred to as a heart attack (Thygesen et al., 2018).
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Physical exertion, emotional stress, and acute illness all increase the workload of the heart and raise its oxygen requirements. In individuals with healthy coronary arteries, blood flow increases to meet this demand. However, when coronary arteries are narrowed by atherosclerosis, the heart's ability to increase oxygen delivery is limited. This imbalance between supply and demand explains why exertion can trigger chest pain, why rest provides relief, and how myocardial infarction develops.
                </p>
              </div>
            </section>

            {/* Section 1: Myocardial Oxygen Supply */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">1</span>
                Myocardial Oxygen Supply
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Oxygen supply to the heart muscle depends almost entirely on blood flow through the coronary arteries. At rest, the myocardium extracts a large proportion of the oxygen delivered by coronary circulation. Because oxygen extraction is nearly maximal under normal conditions, the heart cannot significantly increase extraction when demand rises. Instead, increased oxygen delivery relies solely on an increase in coronary blood flow (Guyton & Hall, 2021). The pumping happens in systole, while the blood to be pumped gets accumulated in diastole.
              </p>
              <div className="p-6 bg-muted/30 rounded-xl border border-border mb-6">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">Several factors influence myocardial oxygen supply, including:</strong>
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-muted-foreground">The diameter of the coronary arteries</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-muted-foreground">The oxygen-carrying capacity of the blood</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-muted-foreground">The amount of time spent in diastole</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed p-5 bg-muted/30 rounded-xl">
                Narrowing of the coronary arteries due to plaque buildup reduces blood flow to heart muscle. Blood oxygen content may be reduced in conditions such as anaemia or chronic lung disease. In addition, coronary perfusion occurs primarily during diastole, when the heart muscle is relaxed. An increased heart rate shortens diastole, further limiting blood accumulated and ultimately oxygen delivery (Klabunde, 2020).
              </p>
            </section>

            {/* Section 2: Myocardial Oxygen Demand */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">2</span>
                Myocardial Oxygen Demand
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Myocardial oxygen demand reflects how hard the heart is working and is determined by three primary physiological factors:
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mb-6">
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Activity className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Heart Rate</h3>
                  <p className="text-sm text-muted-foreground">Has a particularly strong influence on oxygen demand. As heart rate increases, oxygen consumption rises while the duration of diastole shortens, reducing coronary perfusion time.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Myocardial Contractility</h3>
                  <p className="text-sm text-muted-foreground">Stronger contractions require more energy/power and therefore more oxygen.</p>
                </div>
                <div className="bg-gradient-to-br from-card to-muted/20 border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Ventricular Wall Stress</h3>
                  <p className="text-sm text-muted-foreground">Increases when blood pressure is elevated or when the ventricles are dilated, forcing the heart to generate greater tension to eject blood (Guyton & Hall, 2021).</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed p-5 bg-muted/30 rounded-xl">
                During physical activity, all three factors typically increase simultaneously. In a healthy heart, coronary blood flow rises accordingly to maintain balance. In the presence of coronary artery disease, however, oxygen demand increases without a sufficient rise in supply.
              </p>
            </section>

            {/* Section 3: Exercise and the Supply-Demand Mismatch */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">3</span>
                Exercise and the Supply-Demand Mismatch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Exercise places significant metabolic & oxygen demands on the heart. To support increased physical activity, heart rate accelerates, blood pressure rises, and the strength of contraction increases. These changes markedly elevate myocardial oxygen demand.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In individuals with healthy coronary arteries, vessel dilation allows blood flow to increase and meet this demand. In contrast, when coronary arteries are narrowed by atherosclerotic plaque, their ability to dilate is limited. As a result, oxygen delivery cannot increase adequately, leading to myocardial ischemia (Cleveland Clinic, 2024a).
              </p>
              <div className="mt-6 bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded-xl p-6 mb-6">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-destructive flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5" />
                    Critical Point
                  </strong>
                  When coronary blood flow is reduced, even modest increases in cardiac workload can overwhelm oxygen supply, leading to myocardial ischemia.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <p className="text-muted-foreground leading-relaxed">
                  Clinically, this mismatch often presents as exertional chest pain, known as <strong className="text-foreground">angina</strong>. When activity stops, heart rate and blood pressure fall, oxygen demand decreases, and symptoms typically resolve. This predictable pattern explains why angina is provoked by exertion and relieved by rest.
                </p>
              </div>
            </section>

            {/* Section 4: Progression From Ischemia to Myocardial Infarction */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">4</span>
                Progression From Ischemia to Myocardial Infarction
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If the ischemia is brief, heart muscle cells may recover, once oxygen supply is restored. However, when ischemia is prolonged or severe, irreversible injury occurs. A myocardial infarction develops when oxygen deprivation leads to the death of heart muscle cells (Thygesen et al., 2018).
              </p>
              <div className="p-6 bg-muted/30 rounded-xl border border-border mb-6">
                <p className="text-muted-foreground leading-relaxed mb-3">
                  <strong className="text-foreground">Myocardial infarction most commonly results from:</strong>
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-muted-foreground">Rupture of an atherosclerotic plaque which further narrows the coronary artery</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-muted-foreground">Formation of a blood clot within a coronary artery</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-3 h-3 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
                    <p className="text-muted-foreground">Sudden and critical reduction in coronary blood flow</p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In some cases, a sharp increase in oxygen demand, such as intense exertion or emotional stress, can also precipitate infarction when coronary blood flow is already limited (Cleveland Clinic, 2025).
              </p>
              <div className="mt-6 bg-gradient-to-r from-destructive/10 to-destructive/5 border-l-4 border-destructive rounded-xl p-6">
                <p className="text-foreground leading-relaxed">
                  <strong className="text-destructive">Irreversible Damage:</strong> Without adequate oxygen, myocardial cells cannot generate sufficient energy to maintain normal function. Cell membranes fail, electrical activity of the heart becomes unstable, and affected tissue dies. The damaged region is replaced with scar tissue, which lacks the ability to contract, leading to a permanent reduction in cardiac function.
                </p>
              </div>
            </section>

            {/* Section 5: Why Rest Reduces Risk */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">5</span>
                Why Rest Reduces Risk
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rest is one of the most effective immediate interventions for ischemic chest pain because it directly reduces myocardial oxygen demand. When a person rests:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <strong className="text-foreground text-lg">Heart rate slows</strong>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <strong className="text-foreground text-lg">Blood pressure decreases</strong>
                </div>
                <div className="flex gap-4 items-start p-5 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <span className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <strong className="text-foreground text-lg">Myocardial contractility is reduced</strong>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 p-5 bg-muted/30 rounded-xl">
                These changes lower the heart's energy & oxygen requirements, as they determine the myocardial oxygen demand, allowing limited coronary blood flow to meet oxygen needs (Mayo Clinic Staff, 2024).
              </p>
              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                <p className="text-muted-foreground leading-relaxed">
                  This physiological principle explains why stopping activity is recommended during chest pain which reduces heart rate and blood pressure and why medications such as beta-blockers are effective. Rather than increasing oxygen supply, these treatments reduce demand, restoring balance and protecting the heart muscle. Continued exertion during ischemia, in contrast, worsens injury and increases the risk of myocardial infarction.
                </p>
              </div>
            </section>

            {/* Section 6: Clinical Importance and Prevention */}
            <section className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl flex items-center justify-center text-sm font-bold shadow-lg">6</span>
                Clinical Importance and Prevention
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The balance between oxygen supply and demand is central to the management of coronary artery disease. Many treatments aim to either improve coronary blood flow using medications, placing stents or coronary bypass surgery or reduce cardiac workload by using medications. Preventive strategies focus on controlling risk factors that impair coronary circulation, including atherosclerosis, hypertension, diabetes, smoking and lifestyle modifications.
              </p>
              <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-xl">
                <p className="text-muted-foreground leading-relaxed">
                  Recognizing early warning signs and understanding the physiological limits of a compromised heart are essential for preventing irreversible damage. In many cases, myocardial infarction represents the outcome of a long-standing imbalance between oxygen supply and demand. <strong className="text-foreground">Early intervention, lifestyle modification, and appropriate medical management can significantly reduce this risk and improve long-term outcomes.</strong>
                </p>
              </div>
            </section>

            {/* References */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-foreground mb-4">References</h2>
              <div className="bg-muted/50 rounded-2xl p-8 text-sm text-muted-foreground space-y-3 border border-border">
                <p>Cleveland Clinic. (2024b). Coronary artery disease (CAD). <a href="https://my.clevelandclinic.org/health/diseases/16898-coronary-artery-disease" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://my.clevelandclinic.org/health/diseases/16898-coronary-artery-disease</a></p>
                <p>Cleveland Clinic. (2025). Heart attack (myocardial infarction). <a href="https://my.clevelandclinic.org/health/diseases/16818-heart-attack-myocardial-infarction" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://my.clevelandclinic.org/health/diseases/16818-heart-attack-myocardial-infarction</a></p>
                <p>Klabunde, R. E. (2020). <em>Cardiovascular physiology concepts</em> (3rd ed.). Wolters Kluwer.</p>
                <p>Mayo Clinic Staff. (2024). Coronary artery disease – Symptoms and causes. <a href="https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.mayoclinic.org/diseases-conditions/coronary-artery-disease/symptoms-causes/syc-20350613</a></p>
                <p>Shams P, Gul Z, Makaryus AN. Silent Myocardial Ischemia. [Updated 2024 Mar 7]. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2025 Jan-. Available from: <a href="https://www.ncbi.nlm.nih.gov/books/NBK536915/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.ncbi.nlm.nih.gov/books/NBK536915/</a></p>
                <p>Thygesen, K., Alpert, J. S., Jaffe, A. S., Chaitman, B. R., Bax, J. J., Morrow, D. A., & White, H. D. (2018). Fourth universal definition of myocardial infarction. <em>Circulation, 138</em>(20), e618–e651. <a href="https://doi.org/10.1161/CIR.0000000000000617" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://doi.org/10.1161/CIR.0000000000000617</a></p>
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

export default ArticleSupplyDemand;
