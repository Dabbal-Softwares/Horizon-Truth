
export interface ScenarioData {
    title: string;
    icon: string;
    post: {
      title: string;
      source: string;
      time: string;
      content: string;
      likes: string;
      shares: string;
      comments: string;
    };
    choices: {
      id: number;
      icon: string;
      color: string;
      title: string;
      description: string;
      isCorrect: boolean;
    }[];
    tip: string;
    feedback: {
      correct: string;
      incorrect: string;
    };
  }
  
  export const misInformationScenarioData: ScenarioData[] = [
    {
      title: "Question 1: Viral Celebrity News",
      icon: "users",
      post: {
        title: "🚨 Breaking News! Celebrity X Quits Acting Forever! 🚨",
        source: "TrendingNowNews",
        time: "5 hours ago",
        content: `"Celebrity X, beloved star of blockbuster movies, has announced their decision to leave acting forever. According to a source close to the celebrity, they plan to focus on their personal life and spend more time with their family. Fans are devastated. Read more here: bit.ly/fake-news-link"`,
        likes: "12,345",
        shares: "4,567",
        comments: "2,345",
      },
      choices: [
        {
          id: 1,
          icon: "search",
          color: "green",
          title: "Investigate the Source",
          description: "Check the credibility of TrendingNowNews and the linked article",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "hashtag",
          color: "blue",
          title: "Check Hashtag Trends",
          description: "See what reliable sources are saying about this topic",
          isCorrect: false,
        },
        {
          id: 3,
          icon: "check",
          color: "red",
          title: "Assume It's True",
          description: "Accept the post at face value and share with your network",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "user-check",
          color: "purple",
          title: "Verify With Official Sources",
          description: "Check Celebrity X's official social media accounts",
          isCorrect: true,
        },
      ],
      tip: "Viral posts often use emotional language to encourage sharing without verification",
      feedback: {
        correct: "Great job investigating the source! Always verify sensational claims with official channels.",
        incorrect: "Assuming viral posts are true without verification is how misinformation spreads rapidly."
      }
    },
    {
      title: "Question 2: Political Misinformation",
      icon: "landmark",
      post: {
        title: "🔥 SHOCKING: Politician Y Caught in Corruption Scandal! 🔥",
        source: "TruthSeeker2023",
        time: "2 hours ago",
        content: `"Explosive documents reveal Politician Y accepted millions in bribes. The mainstream media is covering this up! Share before it gets deleted! Full details here: truthseeker.xyz/scandal"`,
        likes: "9,876",
        shares: "5,432",
        comments: "3,210",
      },
      choices: [
        {
          id: 1,
          icon: "newspaper",
          color: "green",
          title: "Check Reputable News",
          description: "Search established news outlets for similar reports",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "share",
          color: "red",
          title: "Share Immediately",
          description: "Spread this important revelation",
          isCorrect: false,
        },
        {
          id: 3,
          icon: "balance-scale",
          color: "blue",
          title: "Verify Documents",
          description: "Look for official records or court documents",
          isCorrect: true,
        },
        {
          id: 4,
          icon: "exclamation-triangle",
          color: "yellow",
          title: "Check Fact-Checkers",
          description: "See if fact-checking organizations have addressed this",
          isCorrect: true,
        },
      ],
      tip: "Claims about suppressed information often use urgency tactics to bypass critical thinking",
      feedback: {
        correct: "Excellent work verifying through official channels! Political claims should always be cross-checked.",
        incorrect: "Sharing unverified political claims can contribute to polarization and misinformation."
      }
    },
    // Add 8 more social media scenarios following the same pattern
    {
      title: "Question 3: Fake Product Endorsement",
      icon: "shopping-bag",
      post: {
        title: "🌟 Celebrity Z LOVES This Weight Loss Tea! 🌟",
        source: "HealthDealsDaily",
        time: "1 day ago",
        content: `"Celebrity Z lost 20lbs in 2 weeks with this miracle tea! Doctors hate it because it works too well. Limited stock available! Order now: getthin.fast/tea"`,
        likes: "15,678",
        shares: "7,890",
        comments: "4,321",
      },
      choices: [
        {
          id: 1,
          icon: "image",
          color: "green",
          title: "Reverse Image Search",
          description: "Check if the celebrity actually endorsed this product",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "flask",
          color: "blue",
          title: "Research Ingredients",
          description: "Look up scientific studies on the tea's components",
          isCorrect: true,
        },
        {
          id: 3,
          icon: "credit-card",
          color: "red",
          title: "Buy Immediately",
          description: "Purchase before the 'limited stock' runs out",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "user-tie",
          color: "purple",
          title: "Check Celebrity's Page",
          description: "Verify on the celebrity's official social media",
          isCorrect: true,
        },
      ],
      tip: "Fake endorsements often use urgency tactics and exaggerated claims",
      feedback: {
        correct: "Smart thinking! Celebrity endorsements should always be verified through official channels.",
        incorrect: "Fake product endorsements are common scams that exploit people's trust in celebrities."
      }
    },
    {
      title: "Question 4: Fake Giveaway Scam",
      icon: "gift",
      post: {
        title: "🎁 FREE iPhone 15 Pro! Limited Time Offer! 🎁",
        source: "AppleDealsOfficial",
        time: "3 hours ago",
        content: `"Apple is giving away 100 iPhone 15 Pros to celebrate 1M followers! Click here to claim yours: apple-giveaway.scam/iphone. Just pay shipping!"`,
        likes: "23,456",
        shares: "12,345",
        comments: "8,765",
      },
      choices: [
        {
          id: 1,
          icon: "globe",
          color: "green",
          title: "Check Official Website",
          description: "Verify on Apple's real website",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "shield-alt",
          color: "blue",
          title: "Report the Page",
          description: "Flag this as a potential scam",
          isCorrect: true,
        },
        {
          id: 3,
          icon: "mouse-pointer",
          color: "red",
          title: "Click the Link",
          description: "Enter your details to claim the prize",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "search-dollar",
          color: "purple",
          title: "Look for Scam Reports",
          description: "Search if others have reported this as fake",
          isCorrect: true,
        },
      ],
      tip: "Legitimate companies rarely give away expensive products through social media posts",
      feedback: {
        correct: "Excellent scam detection! Always verify giveaways through official channels.",
        incorrect: "Giveaway scams often steal personal information or install malware."
      }
    },
  ];
  
  export const healthScenarioData: ScenarioData[] = [
    {
      title: "Question 1: Miracle Cancer Cure",
      icon: "heartbeat",
      post: {
        title: "🌿 Miracle Cure Discovered! Doctors Hate This! 🌿",
        source: "NaturalHealthTruth",
        time: "3 hours ago",
        content: `"A simple kitchen ingredient can cure cancer in 3 days! Big Pharma doesn't want you to know this secret. Thousands have already been healed. Click here to learn the shocking truth: healthsecret.site/free-cure"`,
        likes: "8,765",
        shares: "3,210",
        comments: "1,543",
      },
      choices: [
        {
          id: 1,
          icon: "search",
          color: "green",
          title: "Check Medical Sources",
          description: "Verify with reputable medical organizations",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "user-md",
          color: "blue",
          title: "Consult a Doctor",
          description: "Ask a medical professional about this claim",
          isCorrect: true,
        },
        {
          id: 3,
          icon: "share",
          color: "red",
          title: "Share Immediately",
          description: "Spread this important health information",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "flask",
          color: "purple",
          title: "Research Studies",
          description: "Look for peer-reviewed research on this claim",
          isCorrect: true,
        },
      ],
      tip: "Miracle cures often make unrealistic claims and attack established medicine",
      feedback: {
        correct: "Excellent work checking with medical professionals!",
        incorrect: "Sharing unverified health advice can be dangerous."
      }
    },
    {
      title: "Question 2: Vaccine Misinformation",
      icon: "syringe",
      post: {
        title: "💉 VACCINE WARNING: Hidden Dangers Revealed! 💉",
        source: "HealthFreedomWarrior",
        time: "1 day ago",
        content: `"New study proves vaccines cause autism. Government is covering it up! Doctors are paid to push these dangerous shots. Read the suppressed report here: truthaboutvax.fake/study"`,
        likes: "12,345",
        shares: "6,789",
        comments: "4,321",
      },
      choices: [
        {
          id: 1,
          icon: "book-medical",
          color: "green",
          title: "Check CDC Website",
          description: "Verify with Centers for Disease Control",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "university",
          color: "blue",
          title: "Search PubMed",
          description: "Look for the study in medical journals",
          isCorrect: true,
        },
        {
          id: 3,
          icon: "ban",
          color: "red",
          title: "Stop Vaccinating",
          description: "Avoid all vaccines immediately",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "user-graduate",
          color: "purple",
          title: "Consult Pediatrician",
          description: "Ask a child health specialist",
          isCorrect: true,
        },
      ],
      tip: "Medical misinformation often cites fake studies or misrepresents real research",
      feedback: {
        correct: "Good job consulting reliable medical sources!",
        incorrect: "The autism-vaccine link has been thoroughly debunked by numerous studies."
      }
    },
    // Add 8 more health scenarios following the same pattern
    {
      title: "Question 3: COVID-19 Conspiracy",
      icon: "virus",
      post: {
        title: "🦠 COVID IS A HOAX! Official Documents Prove It! 🦠",
        source: "WakeUpSheeple",
        time: "5 hours ago",
        content: `"Leaked documents show COVID was planned to control the population. Masks don't work and tests are fake. Spread the truth before they delete this! Evidence here: plandemic.hoax/docs"`,
        likes: "15,678",
        shares: "9,876",
        comments: "5,432",
      },
      choices: [
        {
          id: 1,
          icon: "shield-virus",
          color: "green",
          title: "Check WHO Website",
          description: "Verify with World Health Organization",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "microscope",
          color: "blue",
          title: "Research Virology",
          description: "Look up how viruses actually spread",
          isCorrect: true,
        },
        {
          id: 3,
          icon: "mask",
          color: "red",
          title: "Burn Your Mask",
          description: "Stop complying with the 'hoax'",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "file-alt",
          color: "purple",
          title: "Verify Documents",
          description: "Check if the 'leaked' documents are authentic",
          isCorrect: true,
        },
      ],
      tip: "Conspiracy theories often use pseudo-documents to appear credible",
      feedback: {
        correct: "Excellent fact-checking! Pandemics are real and dangerous.",
        incorrect: "COVID-19 has killed millions worldwide and is not a hoax."
      }
    },
    {
      title: "Question 4: Dangerous Diet Trend",
      icon: "weight",
      post: {
        title: "🍔 EAT BACON, LOSE WEIGHT! Doctors Hate This Diet! 🍔",
        source: "KetoKing",
        time: "2 days ago",
        content: `"New study shows eating only bacon helps you lose 30lbs in a month! Nutritionists are lying to you. Click for the secret diet plan: bacon-diet.fake/plan"`,
        likes: "11,111",
        shares: "5,555",
        comments: "3,333",
      },
      choices: [
        {
          id: 1,
          icon: "apple-alt",
          color: "green",
          title: "Check Nutrition Science",
          description: "Research balanced diet recommendations",
          isCorrect: true,
        },
        {
          id: 2,
          icon: "heartbeat",
          color: "blue",
          title: "Consider Health Risks",
          description: "Look up effects of excessive bacon consumption",
          isCorrect: true,
        },
        {
          id: 3,
          icon: "bacon",
          color: "red",
          title: "Start the Diet",
          description: "Eat only bacon starting today",
          isCorrect: false,
        },
        {
          id: 4,
          icon: "user-md",
          color: "purple",
          title: "Consult Dietitian",
          description: "Get professional nutrition advice",
          isCorrect: true,
        },
      ],
      tip: "Extreme diet claims often ignore basic nutritional science",
      feedback: {
        correct: "Good nutritional thinking! Balanced diets are healthiest.",
        incorrect: "Extreme diets can cause serious health problems."
      }
    },
    // Continue with 6 more health scenarios...
  ];