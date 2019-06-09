using FeedbackForm.Feedbacks.Services;
using FeedbackForm.Logging;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace FeedbackFormWeb
{
    public class Startup
    {
        private  string _corsPolicy = "CORS_POLICY";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(_corsPolicy,
                builder =>
                {
                    builder.AllowAnyHeader()
                        .AllowAnyMethod()
                        .WithOrigins("http://localhost:3000");
                });
            });

            ConfigureDI(services);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        private static void ConfigureDI(IServiceCollection services)
        {
            // Note that we shouldn't use this logger in production
            // For example we could use NLog and prodivde it as Adapter to IAppLogger
            services.AddScoped<IAppLogger, DebugLogger>();
            services.AddScoped<FeedbackService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors(_corsPolicy);

            app.UseHttpsRedirection();
            app.UseMvc();
        }
    }
}
