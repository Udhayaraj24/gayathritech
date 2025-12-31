-- Create machines table for storing machine/product details
CREATE TABLE public.machines (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'General',
  specifications JSONB DEFAULT '{}',
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.machines ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view machines)
CREATE POLICY "Anyone can view machines" 
ON public.machines 
FOR SELECT 
USING (true);

-- Create policy for authenticated users to manage machines (admin)
CREATE POLICY "Authenticated users can insert machines" 
ON public.machines 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update machines" 
ON public.machines 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete machines" 
ON public.machines 
FOR DELETE 
TO authenticated
USING (true);

-- Create storage bucket for machine images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('machine-images', 'machine-images', true);

-- Create storage policies for machine images
CREATE POLICY "Anyone can view machine images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'machine-images');

CREATE POLICY "Authenticated users can upload machine images" 
ON storage.objects 
FOR INSERT 
TO authenticated
WITH CHECK (bucket_id = 'machine-images');

CREATE POLICY "Authenticated users can update machine images" 
ON storage.objects 
FOR UPDATE 
TO authenticated
USING (bucket_id = 'machine-images');

CREATE POLICY "Authenticated users can delete machine images" 
ON storage.objects 
FOR DELETE 
TO authenticated
USING (bucket_id = 'machine-images');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_machines_updated_at
BEFORE UPDATE ON public.machines
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();