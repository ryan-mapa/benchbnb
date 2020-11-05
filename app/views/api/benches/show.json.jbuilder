json.benches do
  json.set! @bench.id do
    json.extract! @bench, 
                  :name, 
                  :description, 
                  :lat,    
                  :lng,    
                  :material,    
                  :wifi,    
                  :scenic,    
                  :seats,    
                  :layable,    
                  :shaded,    
                  :approach    
  end
end 

