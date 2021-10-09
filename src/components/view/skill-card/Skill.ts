export interface Skill {
  /**
   * Title
   * Displayed at the top of the card.
   */
  title: String;

  /**
   * Description
   * Displayed below the title.
   */
  description: string;

  /**
   * Sections
   */
  sections: SkillSection[];
}

export interface SkillSection {
  /**
   * Title
   */
  title: String;

  /**
   * Content
   */
  content: String;
}
