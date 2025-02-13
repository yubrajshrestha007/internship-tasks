const SkillList = [
   {text: 'Home'},
  { text: 'Python' },
  { text: 'Java' },
  { text: 'Javascript' },
  { text: 'PHP' },
];
export const Skills= () => {
    return (
        <div className="skill">
            {SkillList.map((skill, index) => (
                <div key={index}>
                    <li>{skill.text}</li>
                    </div>
            ))}
        </div>
    )
}
