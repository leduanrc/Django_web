from django.core.cache import cache
from django.shortcuts import redirect, HttpResponse, render
from django.conf import settings

class BloqueoMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    """def __call__(self, request):
        # Verificar si la URL actual es una URL de autenticación
        if request.path == '/sign_in/':
            ip_address = request.META.get('REMOTE_ADDR')
            bloqueo_key = f'bloqueo_{ip_address}'  # Definir la clave de bloqueo en caché

            if cache.get(bloqueo_key):
                intentos = cache.get(bloqueo_key)
                
                if intentos >= settings.MAX_LOGIN_ATTEMPTS:
                    # Realizar acciones de bloqueo, como redirigir a una página de bloqueo
                    return render(request, "error_auth.html")
                else:
                    intentos += 1
                    cache.set(bloqueo_key, intentos, settings.BLOQUEO_TIMEOUT)
            else:
                cache.set(bloqueo_key, 1, settings.BLOQUEO_TIMEOUT)

        response = self.get_response(request)
        
        return response"""
    
    def __call__(self, request):
    
        ip_address = request.META.get('REMOTE_ADDR')
        bloqueo_key = f'bloqueo_{ip_address}'
        
        if request.path == '/sign_in':
            if cache.get(bloqueo_key):
                intentos = cache.get(bloqueo_key)
                if intentos >= settings.MAX_LOGIN_ATTEMPTS:
                    # Realizar acciones de bloqueo, como redirigir a una página de bloqueo
                    return render(request, "error_auth.html")
                else:
                    intentos += 1
                    cache.set(bloqueo_key, intentos, settings.BLOQUEO_TIMEOUT)
            else:
                cache.set(bloqueo_key, 1, settings.BLOQUEO_TIMEOUT)
        
        response = self.get_response(request)
        return response