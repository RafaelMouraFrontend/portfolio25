interface StrapiConfigEnv {
  (key: string, defaultValue?: any): any;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string, defaultValue?: any[]): any[];
  json(key: string, defaultValue?: any): any;
  date(key: string, defaultValue?: Date): Date;
}

export default ({ env }: { env: StrapiConfigEnv }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET')
    },
  },
});