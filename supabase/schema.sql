-- Esquema inicial sugerido para Supabase / PostgreSQL.
create extension if not exists pgcrypto;

create table public.complexes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  logo_url text,
  hero_image_url text,
  created_at timestamptz not null default now()
);

create table public.restaurants (
  id uuid primary key default gen_random_uuid(),
  complex_id uuid not null references public.complexes(id) on delete cascade,
  name text not null,
  slug text not null unique,
  tagline text,
  description text,
  logo_url text,
  background_url text,
  accent_color text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null check (role in ('super_admin','local_admin')),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.restaurant_members (
  restaurant_id uuid not null references public.restaurants(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  primary key (restaurant_id, user_id)
);

create table public.categories (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants(id) on delete cascade,
  name text not null,
  description text,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid not null references public.restaurants(id) on delete cascade,
  category_id uuid not null references public.categories(id) on delete restrict,
  name text not null,
  description text,
  price numeric(12,2) not null default 0 check (price >= 0),
  image_url text,
  is_featured boolean not null default false,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index restaurants_complex_idx on public.restaurants(complex_id);
create index categories_restaurant_idx on public.categories(restaurant_id);
create index products_restaurant_category_idx on public.products(restaurant_id, category_id);

-- La activación de RLS y sus políticas debe realizarse junto con las funciones
-- helper que consulten profiles.role y restaurant_members. No habilitar escritura
-- pública anónima sobre estas tablas.
