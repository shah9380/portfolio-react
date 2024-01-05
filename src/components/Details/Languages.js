import LanguageCard from "./LanguageCard";

const Languages = ()=>{
    const programmingLanguages = [
        {
            name: 'JavaScript',
            competentValue: 90,
            competent: '90%'
        },
        {
            name: 'HTML',
            competentValue: 95,
            competent: '95%'
        },
        {
            name: 'CSS',
            competentValue: 95,
            competent: '95%'
        },
        {
            name: 'Java',
            competentValue: 80,
            competent: '80%'
        },
        {
            name: 'TypeScript',
            competentValue: 70,
            competent: '70%'
        },

    ]
    const languages = [
        {
            name: 'English',
            competentValue: 100,
        },
        {
            name: 'hindi',
            competentValue: 100
        },
        {
            name: 'kannada',
            competentValue: 60
        },
        {
            name: 'urdu',
            competentValue: 90
        }
    ]
    return (
        <section>
            <LanguageCard languageData={programmingLanguages} languageType="Programming Languages"></LanguageCard>
            <LanguageCard languageData={languages} languageType="Human Languages"></LanguageCard>
        </section>
        
    )
}
export default Languages;