import { Redis as UpstashRedis } from "@upstash/redis";
import IORedis from "ioredis";

const getRedisClient = () => {
  if (process.env.REDIS_URL) {
    const client = new IORedis(process.env.REDIS_URL);
    
    // Minimal wrapper to match the subset of @upstash/redis API used in this project
    return {
      get: async <T>(key: string): Promise<T | null> => {
        const val = await client.get(key);
        if (val === null) return null;
        try {
          return JSON.parse(val) as T;
        } catch {
          return val as unknown as T;
        }
      },
      mget: async <T extends any[]>(...keys: string[]): Promise<T> => {
        const vals = await client.mget(...keys);
        return vals.map(val => {
          if (val === null) return null;
          try {
            return JSON.parse(val);
          } catch {
            return val;
          }
        }) as T;
      },
      incr: async (key: string): Promise<number> => {
        return await client.incr(key);
      },
      set: async (key: string, value: any, options?: { nx?: boolean; ex?: number }): Promise<boolean | string | null> => {
        const val = typeof value === 'string' ? value : JSON.stringify(value);
        if (options?.nx) {
          const res = await client.set(key, val, "EX", options.ex || 0, "NX");
          return res === "OK";
        }
        if (options?.ex) {
          return await client.set(key, val, "EX", options.ex);
        }
        return await client.set(key, val);
      },
    };
  }
  
  return UpstashRedis.fromEnv();
};

export const redis = getRedisClient();
