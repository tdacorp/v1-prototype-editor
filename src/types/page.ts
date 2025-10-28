
export interface pages {
  id: string;
  slug: string;
  status:"published";
  components: PageComponent[];
  seo: SEO;
  config: PageConfig;
  createdAt: string;
  updatedAt: string;
}

export interface ComponentProps {
  [key: string]: string | number | boolean | string[] | null | undefined | ComponentProps | ComponentProps[] ;
}


export interface PageComponent {
  id?: string;
  type: string;
  props: ComponentProps;
  config?: Record<string, unknown>;
  style?: Record<string, unknown>;
}

export interface PageConfig {
  layout: string;
}

export interface SEO {
  title: string;
  description?: string;
  keywords?: string[]; 
  ogImage?: string;    
}



