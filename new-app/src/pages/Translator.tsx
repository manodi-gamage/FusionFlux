import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

// Dummy translations for demo purposes
const dummyTranslations = {
  'Hello': 'ආයුබෝවන්',
  'Thank you': 'ස්තූතියි',
  'How are you?': 'කොහොමද?',
  'Good morning': 'සුභ උදෑසනක්',
  'Good night': 'සුභ රාත්රියක්',
  'Please': 'කරුණාකර',
  'Where is the bathroom?': 'වැසිකිළිය කොහෙද?',
  'How much is this?': 'මේක කීයද?',
  'I need help': 'මට උදව් අවශ්යයි',
  'Delicious': 'රසයි',
};

export default function Translator() {
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isEnglishToSinhala, setIsEnglishToSinhala] = useState(true);

  const handleTranslate = () => {
    // Dummy translation logic
    if (isEnglishToSinhala) {
      setTranslatedText(dummyTranslations[sourceText] || 'Translation not available');
    } else {
      const entry = Object.entries(dummyTranslations).find(([_, value]) => value === sourceText);
      setTranslatedText(entry ? entry[0] : 'Translation not available');
    }
  };

  const handleSwapLanguages = () => {
    setIsEnglishToSinhala(!isEnglishToSinhala);
    setSourceText('');
    setTranslatedText('');
  };

  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Language Translator</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Translate between English and Sinhala to help you communicate during your
          travels in Sri Lanka.
        </p>
      </motion.div>

      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-medium">
              {isEnglishToSinhala ? 'English' : 'Sinhala'}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleSwapLanguages}
              className="mx-4"
            >
              <ArrowRightLeft className="h-4 w-4" />
            </Button>
            <span className="text-lg font-medium">
              {isEnglishToSinhala ? 'Sinhala' : 'English'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Textarea
                placeholder={`Enter ${isEnglishToSinhala ? 'English' : 'Sinhala'} text...`}
                className="h-40 mb-4"
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value)}
              />
              <Button onClick={handleTranslate} className="w-full">
                Translate
              </Button>
            </div>

            <Textarea
              placeholder="Translation will appear here..."
              className="h-40"
              value={translatedText}
              readOnly
            />
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Common Phrases</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(dummyTranslations).slice(0, 6).map(([english, sinhala]) => (
                <Button
                  key={english}
                  variant="outline"
                  className="justify-start"
                  onClick={() => {
                    if (isEnglishToSinhala) {
                      setSourceText(english);
                      setTranslatedText(sinhala);
                    } else {
                      setSourceText(sinhala);
                      setTranslatedText(english);
                    }
                  }}
                >
                  {isEnglishToSinhala ? english : sinhala}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}