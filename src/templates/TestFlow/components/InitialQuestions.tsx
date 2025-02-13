import React, { useState } from 'react';

import AppButton from '@/components/AppButton/AppButton';
import AppSelect from '@/components/AppSelect/AppSelect';
import AppCheckbox from '@/components/AppCheckbox/AppCheckbox';
import AppLabel from '@/components/AppLabel/AppLabel';

// const languageLevels = ['Beginner', 'Pre-Intermediate', 'Intermediate', 'Upper-Intermediate', 'Advanced'];

const professions = [
  'UI/UX designer',
  'Data analyst',
  'QA engineer',
  'Python developer',
  'Digital marketer',
  'Front-end developer',
  'Full-stack developer',
  'DevOps engineer',
  'Java developer',
  'Recruiter',
];

const hobbies = ['cinema', 'books', 'sports', 'technologies', 'traveling', 'music'];

const InitialQuestions: React.FC<{ handleComplete: () => void }> = ({ handleComplete }) => {
  // const [languageLevel, setLanguageLevel] = useState('');
  const [profession, setProfession] = useState('');
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

  const handleHobbyChange = (hobby: string) => {
    setSelectedHobbies(prev => {
      if (prev.includes(hobby)) {
        return prev.filter(h => h !== hobby);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, hobby];
    });
  };

  const isFormValid = profession && selectedHobbies.length === 3;

  return (
    <div>
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">English Proficiency Assessment</h1>
        <p className="mx-auto max-w-md text-gray-600">
          Before we start the test, please answer a few questions to make it more relevant to your needs
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-md space-y-6 px-4">
        {/* <div className="space-y-2"> */}
        {/*  <AppLabel>Estimated language level</AppLabel> */}
        {/*  <AppSelect value={languageLevel} onValueChange={setLanguageLevel}> */}
        {/*    <AppSelect.Trigger className="w-full"> */}
        {/*      <AppSelect.Value placeholder="Choose language level" /> */}
        {/*    </AppSelect.Trigger> */}
        {/*    <AppSelect.Content> */}
        {/*      {languageLevels.map(level => ( */}
        {/*        <AppSelect.Item key={level} value={level}> */}
        {/*          {level} */}
        {/*        </AppSelect.Item> */}
        {/*      ))} */}
        {/*    </AppSelect.Content> */}
        {/*  </AppSelect> */}
        {/* </div> */}

        <div className="space-y-2">
          <AppLabel>Future profession</AppLabel>
          <AppSelect value={profession} onValueChange={setProfession}>
            <AppSelect.Trigger className="w-full">
              <AppSelect.Value placeholder="Choose profession" />
            </AppSelect.Trigger>
            <AppSelect.Content>
              {professions.map(prof => (
                <AppSelect.Item key={prof} value={prof}>
                  {prof}
                </AppSelect.Item>
              ))}
            </AppSelect.Content>
          </AppSelect>
        </div>

        <div className="space-y-2">
          <AppLabel>Choose three hobbies from the list:</AppLabel>
          <div className="grid grid-cols-2 gap-2">
            {hobbies.map(hobby => (
              <label key={hobby} className="flex items-center space-x-2">
                <AppCheckbox
                  checked={selectedHobbies.includes(hobby)}
                  onCheckedChange={() => handleHobbyChange(hobby)}
                  disabled={selectedHobbies.length >= 3 && !selectedHobbies.includes(hobby)}
                />
                <span className="text-sm">{hobby}</span>
              </label>
            ))}
          </div>
          {/* <p className="text-sm text-gray-500">{selectedHobbies.length}/3 обрано</p> */}
        </div>

        <AppButton variant="outline" className="w-full rounded-3xl" onClick={handleComplete} disabled={!isFormValid}>
          Go to the test
        </AppButton>
      </div>
    </div>
  );
};

export default InitialQuestions;
